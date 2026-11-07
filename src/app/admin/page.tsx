import React from "react";
import { redirect } from "next/navigation";
import { isStaffAuthenticated } from "@/lib/auth";
import { getAppointments, getInquiries, AppointmentRecord, InquiryRecord } from "@/lib/storage";
import AdminDashboardClient from "./AdminDashboardClient";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `Staff Management Dashboard | ${BRAND.name}`,
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!isStaffAuthenticated()) {
    redirect("/admin/login");
  }

  let appointments: AppointmentRecord[] = [];
  let inquiries: InquiryRecord[] = [];

  try {
    appointments = await getAppointments();
  } catch (err) {
    console.warn("[admin] Error loading appointments:", err);
    appointments = [];
  }

  try {
    inquiries = await getInquiries();
  } catch (err) {
    console.warn("[admin] Error loading inquiries:", err);
    inquiries = [];
  }

  return (
    <AdminDashboardClient
      initialAppointments={appointments}
      initialInquiries={inquiries}
    />
  );
}
