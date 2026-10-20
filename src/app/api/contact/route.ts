import { NextRequest, NextResponse } from "next/server";
import { sanitizeText, validateEmail, validatePhone, checkRateLimit } from "@/lib/validation";
import { saveInquiry } from "@/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    if (!checkRateLimit(ip, 10, 60000)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many messages sent. Please wait before submitting again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const name = sanitizeText(body?.name);
    const phone = sanitizeText(body?.phone);
    const email = sanitizeText(body?.email);
    const serviceInterest = sanitizeText(body?.serviceInterest);
    const message = sanitizeText(body?.message);

    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = "Please provide your full name.";
    }
    if (!phone || !validatePhone(phone)) {
      errors.phone = "Please provide a valid 10+ digit contact phone number.";
    }
    if (!email || !validateEmail(email)) {
      errors.email = "Please provide a valid email address.";
    }
    if (!message || message.length < 5) {
      errors.message = "Please write a brief message or question (at least 5 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Please check the highlighted fields." },
        { status: 400 }
      );
    }

    const inquiry = await saveInquiry({
      name,
      phone,
      email,
      serviceInterest,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. Our team will contact you promptly.",
        data: { id: inquiry.id },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact inquiry error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please call us directly." },
      { status: 500 }
    );
  }
}
