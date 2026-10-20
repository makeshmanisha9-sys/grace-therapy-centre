import { NextRequest, NextResponse } from "next/server";
import { validateAppointmentInput, checkRateLimit } from "@/lib/validation";
import { saveAppointment } from "@/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    // 10 submissions per minute max per IP
    if (!checkRateLimit(ip, 10, 60000)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validation = validateAppointmentInput(body);

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
          message: "Please correct the highlighted fields in the form.",
        },
        { status: 400 }
      );
    }

    const saved = await saveAppointment({
      patientName: validation.sanitized.patientName,
      guardianName: validation.sanitized.guardianName,
      phone: validation.sanitized.phone,
      email: validation.sanitized.email,
      serviceRequested: validation.sanitized.serviceRequested,
      preferredDate: validation.sanitized.preferredDate,
      preferredTimeSlot: validation.sanitized.preferredTimeSlot,
      attendanceMode: validation.sanitized.attendanceMode,
      message: validation.sanitized.message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your appointment request has been received. Our clinical coordinator will call to confirm timing.",
        data: {
          requestNumber: saved.requestNumber,
          patientName: saved.patientName,
          serviceRequested: saved.serviceRequested,
          preferredDate: saved.preferredDate,
          preferredTimeSlot: saved.preferredTimeSlot,
          attendanceMode: saved.attendanceMode,
          status: saved.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again or call +91 8220007614 directly.",
      },
      { status: 500 }
    );
  }
}
