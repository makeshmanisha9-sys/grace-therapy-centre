// Server-side validation, sanitization, and rate limiting utilities

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// In-memory sliding window rate limiter
const ipRequestHistory = new Map<string, number[]>();

export function checkRateLimit(ip: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = ipRequestHistory.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= limit) {
    return false; // Rate limit exceeded
  }

  validTimestamps.push(now);
  ipRequestHistory.set(ip, validTimestamps);
  return true;
}

export function sanitizeText(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "") // strip html brackets
    .trim()
    .slice(0, 1000); // limit length
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  // Allow +91 or standard 10-15 digit phone formats with optional spaces/hyphens
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, "");
  return cleaned.length >= 10 && cleaned.length <= 15 && /^\d+$/.test(cleaned);
}

export function validateAppointmentInput(body: any): {
  isValid: boolean;
  errors: Record<string, string>;
  sanitized: {
    patientName: string;
    guardianName: string;
    phone: string;
    email: string;
    serviceRequested: string;
    preferredDate: string;
    preferredTimeSlot: string;
    attendanceMode: "in-person" | "online-teletherapy";
    message: string;
  };
} {
  const errors: Record<string, string> = {};

  const patientName = sanitizeText(body?.patientName);
  const guardianName = sanitizeText(body?.guardianName);
  const phone = sanitizeText(body?.phone);
  const email = sanitizeText(body?.email);
  const serviceRequested = sanitizeText(body?.serviceRequested);
  const preferredDate = sanitizeText(body?.preferredDate);
  const preferredTimeSlot = sanitizeText(body?.preferredTimeSlot);
  const attendanceMode =
    body?.attendanceMode === "online-teletherapy" ? "online-teletherapy" : "in-person";
  const message = sanitizeText(body?.message);

  if (!patientName || patientName.length < 2) {
    errors.patientName = "Please provide the patient/child name (min 2 characters).";
  }

  if (!phone || !validatePhone(phone)) {
    errors.phone = "Please provide a valid contact phone number (10+ digits).";
  }

  if (!email || !validateEmail(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (!serviceRequested) {
    errors.serviceRequested = "Please select a required therapy or care service.";
  }

  if (!preferredDate) {
    errors.preferredDate = "Please choose a preferred appointment date.";
  } else {
    const selectedDate = new Date(preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selectedDate.getTime()) || selectedDate < today) {
      errors.preferredDate = "Preferred date cannot be in the past.";
    }
  }

  if (!preferredTimeSlot) {
    errors.preferredTimeSlot = "Please choose a preferred time slot.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      patientName,
      guardianName,
      phone,
      email,
      serviceRequested,
      preferredDate,
      preferredTimeSlot,
      attendanceMode,
      message,
    },
  };
}
