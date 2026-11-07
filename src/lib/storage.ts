import fs from "fs";
import path from "path";
import os from "os";
import { createClient } from "@supabase/supabase-js";

export type AppointmentStatus =
  | "Pending"
  | "Contacted"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export interface AppointmentRecord {
  id: string;
  requestNumber: string;
  patientName: string;
  guardianName?: string;
  phone: string;
  email: string;
  serviceRequested: string;
  preferredDate: string;
  preferredTimeSlot: string;
  attendanceMode: "in-person" | "online-teletherapy";
  message?: string;
  status: AppointmentStatus;
  staffNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface InquiryRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceInterest?: string;
  message: string;
  status: "New" | "Contacted" | "Resolved";
  createdAt: string;
}

// Global in-memory storage fallback across serverless invocations
declare global {
  // eslint-disable-next-line no-var
  var __grace_appointments: AppointmentRecord[] | undefined;
  // eslint-disable-next-line no-var
  var __grace_inquiries: InquiryRecord[] | undefined;
}

if (!globalThis.__grace_appointments) {
  globalThis.__grace_appointments = [];
}
if (!globalThis.__grace_inquiries) {
  globalThis.__grace_inquiries = [];
}

// Resolve writable data directory (handles Vercel read-only /var/task filesystem)
function getDataDirectory(): string {
  // If running on Vercel or AWS Lambda, process.cwd() is read-only.
  // os.tmpdir() (/tmp) is guaranteed to be writable.
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    const tmpDir = path.join(os.tmpdir(), "grace-data");
    try {
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
      return tmpDir;
    } catch {
      return os.tmpdir();
    }
  }

  // Local development fallback
  const localDir = path.join(process.cwd(), "data");
  try {
    if (!fs.existsSync(localDir)) {
      fs.mkdirSync(localDir, { recursive: true });
    }
    return localDir;
  } catch {
    // If local fails due to permission, fallback to os.tmpdir()
    return os.tmpdir();
  }
}

function getFilePath(filename: string): string {
  const dir = getDataDirectory();
  return path.join(dir, filename);
}

function safeReadJson<T>(filename: string, fallback: T): T {
  try {
    const filePath = getFilePath(filename);
    if (!fs.existsSync(filePath)) {
      return fallback;
    }
    const raw = fs.readFileSync(filePath, "utf8");
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn(`[storage] safeReadJson warning for ${filename}:`, err);
    return fallback;
  }
}

function safeWriteJson<T>(filename: string, data: T): void {
  try {
    const filePath = getFilePath(filename);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.warn(`[storage] safeWriteJson warning for ${filename} (using memory store):`, err);
  }
}

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (url && key && url.startsWith("https://")) {
    try {
      return createClient(url, key, {
        auth: { persistSession: false },
      });
    } catch (e) {
      console.warn("[storage] Supabase init failed:", e);
      return null;
    }
  }
  return null;
}

// Generate human-friendly reference request number
export function generateRequestNumber(): string {
  const year = new Date().getFullYear();
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `GRACE-${year}-${randomPart}`;
}

export async function saveAppointment(
  data: Omit<
    AppointmentRecord,
    "id" | "requestNumber" | "status" | "createdAt" | "updatedAt"
  >
): Promise<AppointmentRecord> {
  const supabase = getSupabaseClient();
  const requestNumber = generateRequestNumber();
  const now = new Date().toISOString();

  const record: AppointmentRecord = {
    id: `apt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    requestNumber,
    ...data,
    status: "Pending",
    createdAt: now,
    updatedAt: now,
  };

  // 1. Try Supabase cloud persistence if configured
  if (supabase) {
    try {
      const { data: inserted, error } = await supabase
        .from("appointments")
        .insert({
          request_number: record.requestNumber,
          patient_name: record.patientName,
          guardian_name: record.guardianName || null,
          phone: record.phone,
          email: record.email,
          service_requested: record.serviceRequested,
          preferred_date: record.preferredDate,
          preferred_time_slot: record.preferredTimeSlot,
          attendance_mode: record.attendanceMode,
          message: record.message || null,
          status: "Pending",
          staff_notes: null,
          created_at: now,
          updated_at: now,
        })
        .select()
        .single();

      if (!error && inserted) {
        record.id = inserted.id;
        record.status = inserted.status;
      }
    } catch (e) {
      console.warn("[storage] Supabase insert warning:", e);
    }
  }

  // 2. Safe in-memory store
  if (globalThis.__grace_appointments) {
    globalThis.__grace_appointments.unshift(record);
  }

  // 3. Safe local/temp file persistence (never throws)
  try {
    const diskList = safeReadJson<AppointmentRecord[]>("appointments.json", []);
    diskList.unshift(record);
    safeWriteJson("appointments.json", diskList);
  } catch (err) {
    console.warn("[storage] Disk write warning:", err);
  }

  return record;
}

export async function getAppointments(filters?: {
  status?: string;
  service?: string;
  query?: string;
}): Promise<AppointmentRecord[]> {
  const supabase = getSupabaseClient();

  if (supabase) {
    try {
      let queryBuilder = supabase
        .from("appointments")
        .select("*")
        .order("created_at", { ascending: false });

      if (filters?.status && filters.status !== "All") {
        queryBuilder = queryBuilder.eq("status", filters.status);
      }
      if (filters?.service && filters.service !== "All") {
        queryBuilder = queryBuilder.eq("service_requested", filters.service);
      }

      const { data, error } = await queryBuilder;
      if (!error && Array.isArray(data)) {
        return data.map((item: any) => ({
          id: item.id,
          requestNumber: item.request_number,
          patientName: item.patient_name,
          guardianName: item.guardian_name,
          phone: item.phone,
          email: item.email,
          serviceRequested: item.service_requested,
          preferredDate: item.preferred_date,
          preferredTimeSlot: item.preferred_time_slot,
          attendanceMode: item.attendance_mode,
          message: item.message,
          status: item.status,
          staffNotes: item.staff_notes,
          createdAt: item.created_at,
          updatedAt: item.updated_at,
        }));
      }
    } catch (e) {
      console.warn("[storage] Supabase query warning:", e);
    }
  }

  // Fallback to disk or in-memory
  let list = safeReadJson<AppointmentRecord[]>(
    "appointments.json",
    globalThis.__grace_appointments || []
  );

  // Merge in-memory if disk is empty
  if (list.length === 0 && (globalThis.__grace_appointments?.length || 0) > 0) {
    list = globalThis.__grace_appointments || [];
  }

  if (filters?.status && filters.status !== "All") {
    list = list.filter((a) => a.status === filters.status);
  }
  if (filters?.service && filters.service !== "All") {
    list = list.filter((a) => a.serviceRequested === filters.service);
  }
  if (filters?.query) {
    const q = filters.query.toLowerCase();
    list = list.filter(
      (a) =>
        a.patientName.toLowerCase().includes(q) ||
        (a.guardianName && a.guardianName.toLowerCase().includes(q)) ||
        a.requestNumber.toLowerCase().includes(q) ||
        a.phone.includes(q)
    );
  }

  return list;
}

export async function updateAppointment(
  id: string,
  updates: { status?: AppointmentStatus; staffNotes?: string }
): Promise<AppointmentRecord | null> {
  const supabase = getSupabaseClient();
  const now = new Date().toISOString();

  if (supabase) {
    try {
      const payload: any = { updated_at: now };
      if (updates.status) payload.status = updates.status;
      if (updates.staffNotes !== undefined) payload.staff_notes = updates.staffNotes;

      const { data, error } = await supabase
        .from("appointments")
        .update(payload)
        .eq("id", id)
        .select()
        .single();

      if (!error && data) {
        return {
          id: data.id,
          requestNumber: data.request_number,
          patientName: data.patient_name,
          guardianName: data.guardian_name,
          phone: data.phone,
          email: data.email,
          serviceRequested: data.service_requested,
          preferredDate: data.preferred_date,
          preferredTimeSlot: data.preferred_time_slot,
          attendanceMode: data.attendance_mode,
          message: data.message,
          status: data.status,
          staffNotes: data.staff_notes,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        };
      }
    } catch (e) {
      console.warn("[storage] Supabase update warning:", e);
    }
  }

  // Safe local/temp update
  const list = safeReadJson<AppointmentRecord[]>(
    "appointments.json",
    globalThis.__grace_appointments || []
  );
  const idx = list.findIndex((a) => a.id === id || a.requestNumber === id);
  if (idx === -1) return null;

  if (updates.status) list[idx].status = updates.status;
  if (updates.staffNotes !== undefined) list[idx].staffNotes = updates.staffNotes;
  list[idx].updatedAt = now;

  safeWriteJson("appointments.json", list);
  if (globalThis.__grace_appointments) {
    const memIdx = globalThis.__grace_appointments.findIndex(
      (a) => a.id === id || a.requestNumber === id
    );
    if (memIdx !== -1) {
      globalThis.__grace_appointments[memIdx] = list[idx];
    }
  }

  return list[idx];
}

export async function saveInquiry(
  data: Omit<InquiryRecord, "id" | "status" | "createdAt">
): Promise<InquiryRecord> {
  const supabase = getSupabaseClient();
  const now = new Date().toISOString();
  const record: InquiryRecord = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...data,
    status: "New",
    createdAt: now,
  };

  if (supabase) {
    try {
      const { data: inserted, error } = await supabase
        .from("inquiries")
        .insert({
          name: record.name,
          phone: record.phone,
          email: record.email,
          service_interest: record.serviceInterest || null,
          message: record.message,
          status: "New",
          created_at: now,
        })
        .select()
        .single();

      if (!error && inserted) {
        record.id = inserted.id;
      }
    } catch (e) {
      console.warn("[storage] Supabase inquiry warning:", e);
    }
  }

  // Memory store
  if (globalThis.__grace_inquiries) {
    globalThis.__grace_inquiries.unshift(record);
  }

  // Safe file store
  try {
    const diskList = safeReadJson<InquiryRecord[]>("inquiries.json", []);
    diskList.unshift(record);
    safeWriteJson("inquiries.json", diskList);
  } catch (err) {
    console.warn("[storage] Inquiry disk write warning:", err);
  }

  return record;
}

export async function getInquiries(): Promise<InquiryRecord[]> {
  const supabase = getSupabaseClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && Array.isArray(data)) {
        return data.map((item: any) => ({
          id: item.id,
          name: item.name,
          phone: item.phone,
          email: item.email,
          serviceInterest: item.service_interest,
          message: item.message,
          status: item.status,
          createdAt: item.created_at,
        }));
      }
    } catch (e) {
      console.warn("[storage] Supabase getInquiries warning:", e);
    }
  }

  const list = safeReadJson<InquiryRecord[]>(
    "inquiries.json",
    globalThis.__grace_inquiries || []
  );

  if (list.length === 0 && (globalThis.__grace_inquiries?.length || 0) > 0) {
    return globalThis.__grace_inquiries || [];
  }

  return list;
}
