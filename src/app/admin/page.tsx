import React from "react";
import { redirect } from "next/navigation";
import { isStaffAuthenticated } from "@/lib/auth";
import { getAppointments, getInquiries } from "@/lib/storage";
import AdminDashboardClient from "./AdminDashboardClient";

export const metadata = {
  title: "Staff Management Dashboard | GRACE Therapy Centre",
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

  const appointments = await getAppointments();
  const inquiries = await getInquiries();

  return (
    <AdminDashboardClient
      initialAppointments={appointments}
      initialInquiries={inquiries}
    />
  );
}
