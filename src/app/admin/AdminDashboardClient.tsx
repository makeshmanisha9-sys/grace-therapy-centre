"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AppointmentRecord,
  InquiryRecord,
  AppointmentStatus,
} from "@/lib/storage";
import { SERVICES, BRAND } from "@/lib/constants";
import {
  Calendar,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  User,
  LogOut,
  FileDown,
  RefreshCw,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  X,
  Edit3,
} from "lucide-react";

interface AdminDashboardProps {
  initialAppointments: AppointmentRecord[];
  initialInquiries: InquiryRecord[];
}

export default function AdminDashboardClient({
  initialAppointments,
  initialInquiries,
}: AdminDashboardProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"appointments" | "inquiries">("appointments");
  const [appointments, setAppointments] = useState<AppointmentRecord[]>(initialAppointments);
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(initialInquiries);

  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [serviceFilter, setServiceFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentRecord | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [editingNotes, setEditingNotes] = useState("");

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    }
  };

  // Status update handler
  const handleUpdateStatus = async (
    id: string,
    newStatus: AppointmentStatus,
    notes?: string
  ) => {
    setIsUpdatingStatus(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/admin/appointments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus, staffNotes: notes }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatusMessage(data.message || "Failed to update record.");
        setIsUpdatingStatus(false);
        return;
      }

      // Update state locally
      setAppointments((prev) =>
        prev.map((a) => (a.id === id ? data.appointment : a))
      );
      if (selectedAppointment && selectedAppointment.id === id) {
        setSelectedAppointment(data.appointment);
      }
      setStatusMessage("Record updated successfully.");
      setIsUpdatingStatus(false);
    } catch {
      setStatusMessage("Network error during update.");
      setIsUpdatingStatus(false);
    }
  };

  // Filtered Appointments
  const filteredAppointments = appointments.filter((item) => {
    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;
    const matchesService =
      serviceFilter === "All" || item.serviceRequested === serviceFilter;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      item.patientName.toLowerCase().includes(q) ||
      (item.guardianName && item.guardianName.toLowerCase().includes(q)) ||
      item.requestNumber.toLowerCase().includes(q) ||
      item.phone.includes(q) ||
      item.email.toLowerCase().includes(q);

    return matchesStatus && matchesService && matchesQuery;
  });

  // Export CSV
  const exportToCSV = () => {
    const headers = [
      "Request Number",
      "Patient Name",
      "Guardian Name",
      "Phone",
      "Email",
      "Service Requested",
      "Preferred Date",
      "Time Slot",
      "Mode",
      "Status",
      "Created At",
    ];
    const rows = filteredAppointments.map((a) => [
      `"${a.requestNumber}"`,
      `"${a.patientName}"`,
      `"${a.guardianName || ""}"`,
      `"${a.phone}"`,
      `"${a.email}"`,
      `"${a.serviceRequested}"`,
      `"${a.preferredDate}"`,
      `"${a.preferredTimeSlot}"`,
      `"${a.attendanceMode}"`,
      `"${a.status}"`,
      `"${new Date(a.createdAt).toLocaleString()}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `grace-appointments-${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Status Counts
  const counts = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === "Pending").length,
    contacted: appointments.filter((a) => a.status === "Contacted").length,
    confirmed: appointments.filter((a) => a.status === "Confirmed").length,
    completed: appointments.filter((a) => a.status === "Completed").length,
    cancelled: appointments.filter((a) => a.status === "Cancelled").length,
  };

  const getStatusBadge = (status: AppointmentStatus) => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-900 border-amber-300";
      case "Contacted":
        return "bg-sky-100 text-sky-900 border-sky-300";
      case "Confirmed":
        return "bg-emerald-100 text-emerald-900 border-emerald-300";
      case "Completed":
        return "bg-slate-100 text-slate-800 border-slate-300";
      case "Cancelled":
        return "bg-rose-100 text-rose-800 border-rose-300";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-warm-border">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-3 py-1 rounded border border-gold-200">
            Protected Staff Area
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-1">
            Clinical Appointments &amp; Enquiry Management
          </h1>
          <p className="text-xs text-charcoal-600 mt-1">
            {BRAND.name} • Sholinganallur Clinic
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={exportToCSV}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-warm-border text-xs font-semibold text-charcoal-800 hover:bg-warm-cream transition-colors shadow-sm"
          >
            <FileDown className="w-4 h-4 text-navy-800" />
            <span>Export CSV</span>
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors shadow-sm"
          >
            <LogOut className="w-4 h-4 text-gold-400" />
            <span>Staff Logout</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-4 rounded-xl border border-warm-border shadow-subtle">
          <span className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider">
            Total Requests
          </span>
          <p className="text-2xl font-serif font-bold text-navy-950 mt-1">
            {counts.total}
          </p>
        </div>
        <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 shadow-subtle">
          <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
            Pending
          </span>
          <p className="text-2xl font-serif font-bold text-amber-950 mt-1">
            {counts.pending}
          </p>
        </div>
        <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-200 shadow-subtle">
          <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider">
            Contacted
          </span>
          <p className="text-2xl font-serif font-bold text-sky-950 mt-1">
            {counts.contacted}
          </p>
        </div>
        <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 shadow-subtle">
          <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
            Confirmed
          </span>
          <p className="text-2xl font-serif font-bold text-emerald-950 mt-1">
            {counts.confirmed}
          </p>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-subtle">
          <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
            Completed
          </span>
          <p className="text-2xl font-serif font-bold text-slate-900 mt-1">
            {counts.completed}
          </p>
        </div>
        <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200 shadow-subtle">
          <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider">
            Cancelled
          </span>
          <p className="text-2xl font-serif font-bold text-rose-950 mt-1">
            {counts.cancelled}
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-warm-border">
        <button
          type="button"
          onClick={() => setActiveTab("appointments")}
          className={`py-3 px-6 text-sm font-bold border-b-2 transition-colors ${
            activeTab === "appointments"
              ? "border-navy-900 text-navy-900"
              : "border-transparent text-charcoal-500 hover:text-navy-900"
          }`}
        >
          Appointment Requests ({appointments.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("inquiries")}
          className={`py-3 px-6 text-sm font-bold border-b-2 transition-colors ${
            activeTab === "inquiries"
              ? "border-navy-900 text-navy-900"
              : "border-transparent text-charcoal-500 hover:text-navy-900"
          }`}
        >
          Contact Messages ({inquiries.length})
        </button>
      </div>

      {activeTab === "appointments" ? (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-card grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search patient, phone, reference..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-navy-700"
              />
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3 top-2.5" />
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-navy-700"
              >
                <option value="All">All Statuses ({counts.total})</option>
                <option value="Pending">Pending ({counts.pending})</option>
                <option value="Contacted">Contacted ({counts.contacted})</option>
                <option value="Confirmed">Confirmed ({counts.confirmed})</option>
                <option value="Completed">Completed ({counts.completed})</option>
                <option value="Cancelled">Cancelled ({counts.cancelled})</option>
              </select>
            </div>

            {/* Service Filter */}
            <div>
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-navy-700"
              >
                <option value="All">All Services</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-2xl border border-warm-border shadow-card overflow-hidden">
            {filteredAppointments.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-warm-white border-b border-warm-border text-navy-950 font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">Ref #</th>
                      <th className="py-3 px-4">Patient / Child</th>
                      <th className="py-3 px-4">Contact Phone</th>
                      <th className="py-3 px-4">Requested Service</th>
                      <th className="py-3 px-4">Date &amp; Slot</th>
                      <th className="py-3 px-4">Mode</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm-border">
                    {filteredAppointments.map((apt) => (
                      <tr
                        key={apt.id}
                        className="hover:bg-warm-white/60 transition-colors"
                      >
                        <td className="py-3 px-4 font-mono font-bold text-navy-900 whitespace-nowrap">
                          {apt.requestNumber}
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-semibold text-charcoal-900 block">
                            {apt.patientName}
                          </span>
                          {apt.guardianName && (
                            <span className="text-[10px] text-charcoal-500">
                              Guardian: {apt.guardianName}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <a
                            href={`tel:${apt.phone}`}
                            className="font-medium text-navy-800 hover:text-gold-700 underline"
                          >
                            {apt.phone}
                          </a>
                        </td>
                        <td className="py-3 px-4 text-charcoal-800 font-medium max-w-xs truncate">
                          {apt.serviceRequested}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="font-semibold block text-navy-900">
                            {apt.preferredDate}
                          </span>
                          <span className="text-[10px] text-charcoal-500">
                            {apt.preferredTimeSlot.split(" ")[0]}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                              apt.attendanceMode === "online-teletherapy"
                                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                                : "bg-navy-50 text-navy-900 border-navy-200"
                            }`}
                          >
                            {apt.attendanceMode === "online-teletherapy"
                              ? "Teletherapy"
                              : "Clinic Visit"}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusBadge(
                              apt.status
                            )}`}
                          >
                            {apt.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedAppointment(apt);
                              setEditingNotes(apt.staffNotes || "");
                            }}
                            className="px-3 py-1.5 rounded-lg bg-navy-900 text-white font-semibold hover:bg-navy-800 transition-colors text-xs"
                          >
                            Manage
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center text-charcoal-500 space-y-2">
                <Calendar className="w-10 h-10 mx-auto text-charcoal-300" />
                <h3 className="font-serif font-bold text-base text-navy-900">
                  No appointments match the selected criteria
                </h3>
                <p className="text-xs">
                  {appointments.length === 0
                    ? "No appointment requests have been submitted yet."
                    : "Try clearing filters to display all appointment records."}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Inquiries Tab */
        <div className="bg-white rounded-2xl border border-warm-border shadow-card overflow-hidden">
          {inquiries.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-warm-white border-b border-warm-border text-navy-950 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Phone</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Service Interest</th>
                    <th className="py-3 px-4">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-border">
                  {inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-warm-white/60">
                      <td className="py-3 px-4 text-charcoal-500 whitespace-nowrap">
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 font-semibold text-navy-900">
                        {inq.name}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <a
                          href={`tel:${inq.phone}`}
                          className="font-medium text-navy-800 hover:text-gold-700 underline"
                        >
                          {inq.phone}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-charcoal-700">
                        <a
                          href={`mailto:${inq.email}`}
                          className="hover:underline"
                        >
                          {inq.email}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-charcoal-800">
                        {inq.serviceInterest || "General"}
                      </td>
                      <td className="py-3 px-4 text-charcoal-700 max-w-sm">
                        {inq.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-charcoal-500">
              <MessageSquare className="w-10 h-10 mx-auto text-charcoal-300 mb-2" />
              <p className="text-sm">No contact messages received yet.</p>
            </div>
          )}
        </div>
      )}

      {/* Appointment Details & Status Update Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-warm-border shadow-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-warm-border pb-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-navy-800 bg-navy-50 px-2 py-0.5 rounded border border-navy-200">
                  {selectedAppointment.requestNumber}
                </span>
                <h3 className="text-xl font-serif font-bold text-navy-950 mt-1">
                  Manage Request: {selectedAppointment.patientName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAppointment(null)}
                className="p-1.5 rounded-lg text-charcoal-400 hover:text-navy-950 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {statusMessage && (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                {statusMessage}
              </div>
            )}

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-warm-white p-3.5 rounded-xl border border-warm-border">
                <span className="text-charcoal-500 block mb-0.5">Patient / Child:</span>
                <strong className="text-sm text-navy-950 font-bold block">
                  {selectedAppointment.patientName}
                </strong>
                {selectedAppointment.guardianName && (
                  <span className="text-charcoal-600 block mt-0.5">
                    Guardian: {selectedAppointment.guardianName}
                  </span>
                )}
              </div>

              <div className="bg-warm-white p-3.5 rounded-xl border border-warm-border">
                <span className="text-charcoal-500 block mb-0.5">Direct Contact:</span>
                <a
                  href={`tel:${selectedAppointment.phone}`}
                  className="text-sm text-navy-900 font-bold underline block"
                >
                  {selectedAppointment.phone}
                </a>
                <a
                  href={`mailto:${selectedAppointment.email}`}
                  className="text-charcoal-600 underline block mt-0.5"
                >
                  {selectedAppointment.email}
                </a>
              </div>

              <div className="bg-warm-white p-3.5 rounded-xl border border-warm-border">
                <span className="text-charcoal-500 block mb-0.5">Service:</span>
                <strong className="text-sm text-navy-950 font-bold block">
                  {selectedAppointment.serviceRequested}
                </strong>
                <span className="text-charcoal-600 block mt-0.5 capitalize">
                  Mode: {selectedAppointment.attendanceMode.replace("-", " ")}
                </span>
              </div>

              <div className="bg-warm-white p-3.5 rounded-xl border border-warm-border">
                <span className="text-charcoal-500 block mb-0.5">Requested Timing:</span>
                <strong className="text-sm text-navy-950 font-bold block">
                  {selectedAppointment.preferredDate}
                </strong>
                <span className="text-charcoal-600 block mt-0.5">
                  {selectedAppointment.preferredTimeSlot}
                </span>
              </div>
            </div>

            {/* Optional message */}
            {selectedAppointment.message && (
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="text-charcoal-500 block font-semibold mb-1">
                  Family Inquiry Note:
                </span>
                <p className="text-charcoal-800 leading-relaxed">
                  {selectedAppointment.message}
                </p>
              </div>
            )}

            {/* Status Update Form */}
            <div className="pt-2 border-t border-warm-border space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-navy-900">
                Update Appointment Lifecycle Status
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {(
                  [
                    "Pending",
                    "Contacted",
                    "Confirmed",
                    "Completed",
                    "Cancelled",
                  ] as AppointmentStatus[]
                ).map((st) => (
                  <button
                    key={st}
                    type="button"
                    disabled={isUpdatingStatus}
                    onClick={() =>
                      handleUpdateStatus(selectedAppointment.id, st, editingNotes)
                    }
                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all border ${
                      selectedAppointment.status === st
                        ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                        : "bg-white text-charcoal-700 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1">
                  Internal Staff Notes &amp; Assigned Therapist
                </label>
                <textarea
                  rows={2}
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  placeholder="e.g. Spoke to mother, assigned to Senior Audiologist for PTA on Friday 10 AM."
                  className="w-full text-xs rounded-lg border border-slate-300 p-2.5 focus:outline-none focus:border-navy-700"
                />
                <button
                  type="button"
                  disabled={isUpdatingStatus}
                  onClick={() =>
                    handleUpdateStatus(
                      selectedAppointment.id,
                      selectedAppointment.status,
                      editingNotes
                    )
                  }
                  className="mt-2 px-4 py-1.5 rounded-lg bg-navy-900 text-white font-semibold text-xs hover:bg-navy-800"
                >
                  Save Internal Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
