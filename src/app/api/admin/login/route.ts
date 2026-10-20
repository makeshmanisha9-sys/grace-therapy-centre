import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createStaffToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { password, email } = await req.json();

    if (!verifyPassword(password)) {
      return NextResponse.json(
        { success: false, message: "Invalid staff credentials." },
        { status: 401 }
      );
    }

    const token = createStaffToken();
    const response = NextResponse.json({
      success: true,
      message: "Staff authentication successful.",
    });

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error during login." },
      { status: 500 }
    );
  }
}
