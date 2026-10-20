import { NextRequest, NextResponse } from "next/server";
import { isStaffAuthenticated } from "@/lib/auth";
import { getAppointments, updateAppointment, AppointmentStatus } from "@/lib/storage";

export async function GET(req: NextRequest) {
  if (!isStaffAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized. Staff authentication required." },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || "All";
  const service = searchParams.get("service") || "All";
  const query = searchParams.get("query") || "";

  try {
    const list = await getAppointments({ status, service, query });
    return NextResponse.json({ success: true, appointments: list });
  } catch (error) {
    console.error("Admin fetch appointments error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to retrieve appointment records." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  if (!isStaffAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized. Staff authentication required." },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { id, status, staffNotes } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Appointment ID is required." },
        { status: 400 }
      );
    }

    const validStatuses: AppointmentStatus[] = [
      "Pending",
      "Contacted",
      "Confirmed",
      "Completed",
      "Cancelled",
    ];

    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status value provided." },
        { status: 400 }
      );
    }

    const updated = await updateAppointment(id, {
      status,
      staffNotes,
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Appointment record not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Appointment status updated.",
      appointment: updated,
    });
  } catch (error) {
    console.error("Admin update appointment error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update appointment record." },
      { status: 500 }
    );
  }
}
