import crypto from "crypto";
import { cookies } from "next/headers";

const ADMIN_SECRET =
  process.env.ADMIN_SECRET_KEY || "grace_multidisciplinary_therapy_secure_session_key_2026";
const DEFAULT_PASSWORD = process.env.ADMIN_DEFAULT_PASSWORD || "GraceCare2026!";
const COOKIE_NAME = "grace_staff_session";

export function createStaffToken(): string {
  const payload = {
    role: "staff",
    issuedAt: Date.now(),
    expiresAt: Date.now() + 1000 * 60 * 60 * 24, // 24 hours
  };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(data)
    .digest("base64url");
  return `${data}.${signature}`;
}

export function verifyStaffToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [data, signature] = parts;
  const expectedSignature = crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(data)
    .digest("base64url");

  // Constant time comparison
  if (signature.length !== expectedSignature.length) return false;
  const isMatch = crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
  if (!isMatch) return false;

  try {
    const payload = JSON.parse(Buffer.from(data, "base64url").toString("utf8"));
    if (Date.now() > payload.expiresAt) return false;
    return payload.role === "staff";
  } catch {
    return false;
  }
}

export function verifyPassword(inputPassword: string): boolean {
  if (!inputPassword) return false;
  const target = Buffer.from(DEFAULT_PASSWORD);
  const input = Buffer.from(inputPassword);
  if (input.length !== target.length) return false;
  return crypto.timingSafeEqual(input, target);
}

export function isStaffAuthenticated(): boolean {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return verifyStaffToken(token);
}

export { COOKIE_NAME };
