"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { SERVICES, BRAND } from "@/lib/constants";

interface FormState {
  patientName: string;
  guardianName: string;
  phone: string;
  email: string;
  serviceRequested: string;
  preferredDate: string;
  preferredTimeSlot: string;
  attendanceMode: "in-person" | "online-teletherapy";
  message: string;
  consent: boolean;
}

interface SuccessData {
  requestNumber: string;
  patientName: string;
  serviceRequested: string;
  preferredDate: string;
  preferredTimeSlot: string;
  attendanceMode: string;
}

export default function AppointmentForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const preselectedMode = searchParams.get("mode") || "";

  // Min date is tomorrow to prevent selecting past dates
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split("T")[0];

  const [form, setForm] = useState<FormState>({
    patientName: "",
    guardianName: "",
    phone: "",
    email: "",
    serviceRequested: "",
    preferredDate: minDateString,
    preferredTimeSlot: "Morning (9:00 AM – 12:00 PM)",
    attendanceMode: "in-person",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<SuccessData | null>(null);

  useEffect(() => {
    if (preselectedService) {
      const matched = SERVICES.find(
        (s) =>
          s.name.toLowerCase() === preselectedService.toLowerCase() ||
          s.slug.toLowerCase() === preselectedService.toLowerCase()
      );
      if (matched) {
        setForm((prev) => ({
          ...prev,
          serviceRequested: matched.name,
          attendanceMode:
            matched.slug === "teletherapy" || preselectedMode === "online"
              ? "online-teletherapy"
              : prev.attendanceMode,
        }));
      }
    }
  }, [preselectedService, preselectedMode]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!form.patientName.trim()) {
      errs.patientName = "Please enter the patient or child's full name.";
    }

    if (!form.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else {
      const cleanPhone = form.phone.replace(/[\s\-\(\)\+]/g, "");
      if (cleanPhone.length < 10) {
        errs.phone = "Please enter a valid 10-digit phone number.";
      }
    }

    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!form.serviceRequested) {
      errs.serviceRequested = "Please select the service you are seeking.";
    }

    if (!form.preferredDate) {
      errs.preferredDate = "Please choose a preferred appointment date.";
    } else {
      const chosen = new Date(form.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (chosen < today) {
        errs.preferredDate = "Appointment date cannot be in the past.";
      }
    }

    if (!form.preferredTimeSlot) {
      errs.preferredTimeSlot = "Please select a time slot.";
    }

    if (!form.consent) {
      errs.consent =
        "Please acknowledge that this is a consultation request subject to centre confirmation.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName: form.patientName,
          guardianName: form.guardianName,
          phone: form.phone,
          email: form.email,
          serviceRequested: form.serviceRequested,
          preferredDate: form.preferredDate,
          preferredTimeSlot: form.preferredTimeSlot,
          attendanceMode: form.attendanceMode,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setSubmitError(
          data.message || "Failed to submit request. Please verify your details."
        );
        setIsSubmitting(false);
        return;
      }

      setSuccessData(data.data);
      setIsSubmitting(false);
    } catch {
      setSubmitError(
        "A network error occurred. Please verify your connection or call +91 8220007614 directly."
      );
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
      patientName: "",
      guardianName: "",
      phone: "",
      email: "",
      serviceRequested: "",
      preferredDate: minDateString,
      preferredTimeSlot: "Morning (9:00 AM – 12:00 PM)",
      attendanceMode: "in-person",
      message: "",
      consent: false,
    });
    setErrors({});
    setSuccessData(null);
    setSubmitError(null);
  };

  // SUCCESS STATE
  if (successData) {
    return (
      <div className="bg-white rounded-3xl border border-gold-300 p-8 sm:p-10 shadow-card text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
          Request Submitted Successfully
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-3 mb-2">
          Thank You, {successData.patientName}
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-700 max-w-lg mx-auto mb-6 leading-relaxed">
          Your appointment request has been securely recorded. Our clinical coordinator will review schedule availability and call your contact number to confirm the appointment.
        </p>

        {/* Summary Card */}
        <div className="bg-ivory-50 border border-ivory-border rounded-2xl p-6 max-w-md mx-auto text-left mb-6 space-y-3">
          <div className="flex justify-between items-center border-b border-ivory-border pb-2.5">
            <span className="text-xs text-charcoal-600 font-medium">Request Reference:</span>
            <span className="text-xs font-mono font-bold text-navy-950 bg-white px-2.5 py-0.5 rounded border border-navy-100">
              {successData.requestNumber}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-charcoal-600">Service:</span>
            <span className="font-semibold text-navy-950">{successData.serviceRequested}</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-charcoal-600">Preferred Date:</span>
            <span className="font-semibold text-navy-950">{successData.preferredDate}</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-charcoal-600">Preferred Time:</span>
            <span className="font-semibold text-navy-950">{successData.preferredTimeSlot}</span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-charcoal-600">Mode:</span>
            <span className="font-semibold capitalize text-navy-950">
              {successData.attendanceMode.replace("-", " ")}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={resetForm}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-300 text-navy-950 font-semibold text-xs hover:bg-ivory-50 transition-colors"
          >
            Submit Another Request
          </button>
          <a
            href={`tel:${BRAND.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-navy-900 text-white font-semibold text-xs hover:bg-navy-800 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>Need Urgent Assistance? Call Us</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl border border-ivory-border p-6 sm:p-10 shadow-card"
      aria-label="Appointment Request Form"
    >
      {/* Notice */}
      <div className="mb-6 p-4 rounded-2xl bg-ivory-50 border border-gold-200/90 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-gold-700 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-charcoal-700 leading-relaxed">
          <strong className="text-navy-950 font-semibold block mb-0.5">
            Appointment Request Notice
          </strong>
          Submitting this form is an appointment request. Our clinical team reviews therapist availability and confirms your session via phone call or WhatsApp message. We do not collect confidential medical histories via web forms.
        </div>
      </div>

      {submitError && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-800"
        >
          <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
          <div>{submitError}</div>
        </div>
      )}

      <div className="space-y-6">
        {/* Row 1: Patient and Guardian */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="patientName"
              className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
            >
              Patient / Child Full Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={form.patientName}
                onChange={(e) => setForm({ ...form, patientName: e.target.value })}
                placeholder="e.g. Master Aarav / Jane Doe"
                aria-required="true"
                aria-invalid={!!errors.patientName}
                aria-describedby={errors.patientName ? "patientName-error" : undefined}
                className={`w-full rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-1 ${
                  errors.patientName
                    ? "border-rose-400 focus:ring-rose-300 bg-rose-50/20"
                    : "border-slate-300 focus:border-navy-900 focus:ring-navy-900"
                }`}
              />
              <User className="absolute right-3.5 top-3 w-4 h-4 text-charcoal-400 pointer-events-none" />
            </div>
            {errors.patientName && (
              <p id="patientName-error" className="mt-1 text-xs text-rose-600">
                {errors.patientName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="guardianName"
              className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
            >
              Parent / Guardian Name <span className="text-xs font-normal text-charcoal-500">(if minor)</span>
            </label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={form.guardianName}
              onChange={(e) => setForm({ ...form, guardianName: e.target.value })}
              placeholder="e.g. Priya Sharma"
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900"
            />
          </div>
        </div>

        {/* Row 2: Phone and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
            >
              Contact Phone Number <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-1 ${
                  errors.phone
                    ? "border-rose-400 focus:ring-rose-300 bg-rose-50/20"
                    : "border-slate-300 focus:border-navy-900 focus:ring-navy-900"
                }`}
              />
              <Phone className="absolute right-3.5 top-3 w-4 h-4 text-charcoal-400 pointer-events-none" />
            </div>
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-rose-600">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
            >
              Email Address <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your.email@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-1 ${
                  errors.email
                    ? "border-rose-400 focus:ring-rose-300 bg-rose-50/20"
                    : "border-slate-300 focus:border-navy-900 focus:ring-navy-900"
                }`}
              />
              <Mail className="absolute right-3.5 top-3 w-4 h-4 text-charcoal-400 pointer-events-none" />
            </div>
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-rose-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Requested Service & Attendance Mode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="serviceRequested"
              className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
            >
              Requested Therapy / Care Service <span className="text-rose-600">*</span>
            </label>
            <select
              id="serviceRequested"
              name="serviceRequested"
              value={form.serviceRequested}
              onChange={(e) => {
                const val = e.target.value;
                setForm({
                  ...form,
                  serviceRequested: val,
                  attendanceMode:
                    val === "Teletherapy" ? "online-teletherapy" : form.attendanceMode,
                });
              }}
              aria-required="true"
              aria-invalid={!!errors.serviceRequested}
              aria-describedby={errors.serviceRequested ? "serviceRequested-error" : undefined}
              className={`w-full rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm text-charcoal-900 bg-white focus:outline-none focus:ring-1 ${
                errors.serviceRequested
                  ? "border-rose-400 focus:ring-rose-300 bg-rose-50/20"
                  : "border-slate-300 focus:border-navy-900 focus:ring-navy-900"
              }`}
            >
              <option value="">-- Choose a Service --</option>
              {SERVICES.map((srv) => (
                <option key={srv.slug} value={srv.name}>
                  {srv.name}
                </option>
              ))}
              <option value="General Developmental Screening">
                General Developmental Screening &amp; Guidance
              </option>
            </select>
            {errors.serviceRequested && (
              <p id="serviceRequested-error" className="mt-1 text-xs text-rose-600">
                {errors.serviceRequested}
              </p>
            )}
          </div>

          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
              Consultation Mode <span className="text-rose-600">*</span>
            </span>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-semibold transition-colors ${
                  form.attendanceMode === "in-person"
                    ? "border-navy-900 bg-navy-50 text-navy-950"
                    : "border-slate-300 text-charcoal-700 hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name="attendanceMode"
                  value="in-person"
                  checked={form.attendanceMode === "in-person"}
                  onChange={() => setForm({ ...form, attendanceMode: "in-person" })}
                  className="text-navy-900 focus:ring-navy-700"
                />
                <span>In-Person Clinic Visit</span>
              </label>

              <label
                className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-semibold transition-colors ${
                  form.attendanceMode === "online-teletherapy"
                    ? "border-navy-900 bg-navy-50 text-navy-950"
                    : "border-slate-300 text-charcoal-700 hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name="attendanceMode"
                  value="online-teletherapy"
                  checked={form.attendanceMode === "online-teletherapy"}
                  onChange={() => setForm({ ...form, attendanceMode: "online-teletherapy" })}
                  className="text-navy-900 focus:ring-navy-700"
                />
                <span>Online Teletherapy</span>
              </label>
            </div>
          </div>
        </div>

        {/* Row 4: Preferred Date & Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="preferredDate"
              className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
            >
              Preferred Date <span className="text-rose-600">*</span>
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              min={minDateString}
              value={form.preferredDate}
              onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
              aria-required="true"
              aria-invalid={!!errors.preferredDate}
              aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
              className={`w-full rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm text-charcoal-900 bg-white focus:outline-none focus:ring-1 ${
                errors.preferredDate
                  ? "border-rose-400 focus:ring-rose-300 bg-rose-50/20"
                  : "border-slate-300 focus:border-navy-900 focus:ring-navy-900"
              }`}
            />
            {errors.preferredDate && (
              <p id="preferredDate-error" className="mt-1 text-xs text-rose-600">
                {errors.preferredDate}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="preferredTimeSlot"
              className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
            >
              Preferred Time Preference <span className="text-rose-600">*</span>
            </label>
            <select
              id="preferredTimeSlot"
              name="preferredTimeSlot"
              value={form.preferredTimeSlot}
              onChange={(e) => setForm({ ...form, preferredTimeSlot: e.target.value })}
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-charcoal-900 bg-white focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900"
            >
              <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
              <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
              <option value="Evening (4:00 PM – 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Row 5: Optional Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
          >
            Brief Reason or Concern <span className="text-xs font-normal text-charcoal-500">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="e.g. Seeking speech evaluation for language delay, or consultation for hearing test."
            className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900"
          />
          <p className="text-[11px] text-charcoal-500 mt-1">
            Please avoid entering sensitive medical diagnostics. A clinician will discuss clinical history during the consultation.
          </p>
        </div>

        {/* Row 6: Consent checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-navy-900 focus:ring-gold-500"
            />
            <span className="text-xs text-charcoal-700 leading-normal">
              I understand that submitting this form is an appointment inquiry and does not guarantee an immediate booking. I consent to GRACE Therapy Centre contacting me at the phone number provided to schedule and confirm availability.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1.5 text-xs text-rose-600 pl-7">{errors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 disabled:bg-slate-400 disabled:cursor-not-allowed shadow-md hover:shadow-goldGlow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
                <span>Recording Request...</span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Submit Appointment Request</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
