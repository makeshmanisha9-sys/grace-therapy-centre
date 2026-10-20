import fs from "fs";
import path from "path";
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

const DATA_DIR = path.join(process.cwd(), "data");
const APPOINTMENTS_FILE = path.join(DATA_DIR, "appointments.json");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(APPOINTMENTS_FILE)) {
    fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify([], null, 2), "utf8");
  }
  if (!fs.existsSync(INQUIRIES_FILE)) {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), "utf8");
  }
}

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (url && key && url.startsWith("https://")) {
    return createClient(url, key, {
      auth: { persistSession: false },
    });
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
          status: record.status,
        })
        .select()
        .single();

      if (!error && inserted) {
        return {
          id: inserted.id,
          requestNumber: inserted.request_number,
          patientName: inserted.patient_name,
          guardianName: inserted.guardian_name,
          phone: inserted.phone,
          email: inserted.email,
          serviceRequested: inserted.service_requested,
          preferredDate: inserted.preferred_date,
          preferredTimeSlot: inserted.preferred_time_slot,
          attendanceMode: inserted.attendance_mode,
          message: inserted.message,
          status: inserted.status,
          createdAt: inserted.created_at,
          updatedAt: inserted.updated_at,
        };
      }
    } catch (e) {
      console.warn("Supabase insertion encountered error, falling back to local persistent store:", e);
    }
  }

  // Local persistent storage
  ensureDataFiles();
  const raw = fs.readFileSync(APPOINTMENTS_FILE, "utf8");
  const list: AppointmentRecord[] = raw ? JSON.parse(raw) : [];
  list.unshift(record);
  fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(list, null, 2), "utf8");

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
      if (!error && data) {
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
      console.warn("Supabase query error, fallback to local:", e);
    }
  }

  // Local storage query
  ensureDataFiles();
  const raw = fs.readFileSync(APPOINTMENTS_FILE, "utf8");
  let list: AppointmentRecord[] = raw ? JSON.parse(raw) : [];

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
      console.warn("Supabase update error, fallback to local:", e);
    }
  }

  // Local update
  ensureDataFiles();
  const raw = fs.readFileSync(APPOINTMENTS_FILE, "utf8");
  const list: AppointmentRecord[] = raw ? JSON.parse(raw) : [];
  const idx = list.findIndex((a) => a.id === id || a.requestNumber === id);
  if (idx === -1) return null;

  if (updates.status) list[idx].status = updates.status;
  if (updates.staffNotes !== undefined) list[idx].staffNotes = updates.staffNotes;
  list[idx].updatedAt = now;

  fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(list, null, 2), "utf8");
  return list[idx];
}

export async function saveInquiry(
  data: Omit<InquiryRecord, "id" | "status" | "createdAt">
): Promise<InquiryRecord> {
  const now = new Date().toISOString();
  const record: InquiryRecord = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...data,
    status: "New",
    createdAt: now,
  };

  ensureDataFiles();
  const raw = fs.readFileSync(INQUIRIES_FILE, "utf8");
  const list: InquiryRecord[] = raw ? JSON.parse(raw) : [];
  list.unshift(record);
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(list, null, 2), "utf8");
  return record;
}

export async function getInquiries(): Promise<InquiryRecord[]> {
  ensureDataFiles();
  const raw = fs.readFileSync(INQUIRIES_FILE, "utf8");
  return raw ? JSON.parse(raw) : [];
}
