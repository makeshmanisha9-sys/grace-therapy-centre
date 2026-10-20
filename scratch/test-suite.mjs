// Comprehensive test suite for GRACE Therapy Centre
import assert from "assert";

const BASE_URL = "http://localhost:3000";

async function runTests() {
  console.log("=== STARTING FULL END-TO-END TEST SUITE ===");

  const routes = [
    "/",
    "/about",
    "/services",
    "/services/speech-therapy",
    "/services/occupational-therapy",
    "/services/behavioural-therapy",
    "/services/special-education",
    "/services/physiotherapy",
    "/services/hearing-testing-and-hearing-aids",
    "/services/teletherapy",
    "/appointments",
    "/teletherapy",
    "/contact",
    "/gallery",
    "/faq",
    "/privacy-policy",
    "/sitemap.xml",
    "/robots.txt",
    "/admin/login",
  ];

  console.log("\n1. Testing HTTP GET on all website pages and routes...");
  for (const route of routes) {
    const res = await fetch(`${BASE_URL}${route}`);
    assert.strictEqual(
      res.status,
      200,
      `Expected 200 OK for ${route}, got ${res.status}`
    );
    const html = await res.text();
    assert.ok(html.length > 50, `Response body for ${route} was empty`);
    console.log(`  ✓ [200 OK] ${route} (${html.length} bytes)`);
  }

  console.log("\n2. Testing Form Validation (Invalid payload rejection)...");
  const badAptRes = await fetch(`${BASE_URL}/api/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      patientName: "",
      phone: "123",
      email: "invalid-email",
    }),
  });
  assert.strictEqual(badAptRes.status, 400, "Expected 400 Bad Request");
  const badAptJson = await badAptRes.json();
  assert.strictEqual(badAptJson.success, false);
  assert.ok(badAptJson.errors.patientName, "Missing patientName validation error");
  assert.ok(badAptJson.errors.phone, "Missing phone validation error");
  assert.ok(badAptJson.errors.email, "Missing email validation error");
  console.log("  ✓ Appointment validation correctly rejected bad input with granular field errors.");

  console.log("\n3. Testing Successful Appointment Creation & Persistence...");
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  const preferredDate = tomorrow.toISOString().split("T")[0];

  const goodAptRes = await fetch(`${BASE_URL}/api/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      patientName: "Karthik Subramanian",
      guardianName: "Meenakshi Subramanian",
      phone: "+91 98401 23456",
      email: "meenakshi@example.com",
      serviceRequested: "Speech Therapy",
      preferredDate,
      preferredTimeSlot: "Morning (9:00 AM – 12:00 PM)",
      attendanceMode: "in-person",
      message: "Child has delay in sentence articulation and speech clarity.",
    }),
  });
  assert.strictEqual(goodAptRes.status, 201, "Expected 201 Created");
  const goodAptJson = await goodAptRes.json();
  assert.strictEqual(goodAptJson.success, true);
  assert.ok(goodAptJson.data.requestNumber.startsWith("GRACE-"), "Invalid requestNumber");
  console.log(`  ✓ Appointment saved! Request Number: ${goodAptJson.data.requestNumber}`);

  console.log("\n4. Testing Contact Message Submission...");
  const contactRes = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Dr. Rajesh Raman",
      phone: "9840011223",
      email: "rajesh.raman@clinic.com",
      serviceInterest: "Hearing Testing and Hearing Aids",
      message: "Inquiring about diagnostic paediatric audiometry setup and referral options.",
    }),
  });
  assert.strictEqual(contactRes.status, 201, "Expected 201 Created");
  const contactJson = await contactRes.json();
  assert.strictEqual(contactJson.success, true);
  console.log("  ✓ Contact message submitted and saved successfully.");

  console.log("\n5. Testing Admin Security & Authorization Protection...");
  const unauthRes = await fetch(`${BASE_URL}/api/admin/appointments`);
  assert.strictEqual(unauthRes.status, 401, "Expected 401 Unauthorized for unprotected access");
  console.log("  ✓ Unauthenticated access to /api/admin/appointments was blocked with 401 Unauthorized.");

  console.log("\n6. Testing Staff Login...");
  // Test wrong password
  const badLogin = await fetch(`${BASE_URL}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: "wrong_password_xyz" }),
  });
  assert.strictEqual(badLogin.status, 401, "Expected 401 for bad password");

  // Test correct password
  const goodLogin = await fetch(`${BASE_URL}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: "GraceCare2026!" }),
  });
  assert.strictEqual(goodLogin.status, 200, "Expected 200 OK for correct staff password");
  const cookieHeader = goodLogin.headers.get("set-cookie");
  assert.ok(cookieHeader && cookieHeader.includes("grace_staff_session"), "Missing session cookie in response");
  console.log("  ✓ Staff login passed, received HttpOnly session cookie.");

  const sessionCookie = cookieHeader.split(";")[0];

  console.log("\n7. Testing Authenticated Admin Data Retrieval...");
  const adminAptRes = await fetch(`${BASE_URL}/api/admin/appointments`, {
    headers: { Cookie: sessionCookie },
  });
  assert.strictEqual(adminAptRes.status, 200, "Expected 200 for authenticated admin fetch");
  const adminAptData = await adminAptRes.json();
  assert.ok(Array.isArray(adminAptData.appointments), "Appointments should be an array");
  assert.ok(adminAptData.appointments.length >= 1, "Appointments should contain our test request");

  const createdApt = adminAptData.appointments.find(
    (a) => a.requestNumber === goodAptJson.data.requestNumber
  );
  assert.ok(createdApt, "Submitted appointment was not found in admin record list");
  console.log(`  ✓ Admin retrieved appointment record for ${createdApt.patientName} (${createdApt.status})`);

  console.log("\n8. Testing Appointment Status Lifecycle Update (Pending -> Confirmed)...");
  const updateRes = await fetch(`${BASE_URL}/api/admin/appointments`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: sessionCookie,
    },
    body: JSON.stringify({
      id: createdApt.id,
      status: "Confirmed",
      staffNotes: "Coordinator called mother on 9840123456. Confirmed appointment for 10:00 AM.",
    }),
  });
  assert.strictEqual(updateRes.status, 200, "Expected 200 OK for status update");
  const updateJson = await updateRes.json();
  assert.strictEqual(updateJson.appointment.status, "Confirmed");
  assert.strictEqual(
    updateJson.appointment.staffNotes,
    "Coordinator called mother on 9840123456. Confirmed appointment for 10:00 AM."
  );
  console.log("  ✓ Status successfully updated to Confirmed with staff notes.");

  console.log("\n9. Testing Inquiries Retrieval...");
  const adminInqRes = await fetch(`${BASE_URL}/api/admin/inquiries`, {
    headers: { Cookie: sessionCookie },
  });
  assert.strictEqual(adminInqRes.status, 200);
  const adminInqData = await adminInqRes.json();
  assert.ok(adminInqData.inquiries.length >= 1, "Inquiries should have our submitted message");
  console.log(`  ✓ Admin retrieved ${adminInqData.inquiries.length} contact inquiry record(s).`);

  console.log("\n==============================================");
  console.log("ALL 9 TEST SUITES PASSED FLAWLESSLY (100% SUCCESS)");
  console.log("==============================================");
}

runTests().catch((err) => {
  console.error("\n❌ TEST SUITE FAILED:", err);
  process.exit(1);
});
