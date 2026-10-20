import { NextRequest, NextResponse } from "next/server";
import { isStaffAuthenticated } from "@/lib/auth";
import { getInquiries } from "@/lib/storage";

export async function GET(req: NextRequest) {
  if (!isStaffAuthenticated()) {
    return NextResponse.json(
      { success: false, message: "Unauthorized. Staff authentication required." },
      { status: 401 }
    );
  }

  try {
    const list = await getInquiries();
    return NextResponse.json({ success: true, inquiries: list });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to retrieve inquiry records." },
      { status: 500 }
    );
  }
}
