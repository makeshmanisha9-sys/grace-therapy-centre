import React, { Suspense } from "react";
import AppointmentForm from "@/components/AppointmentForm";
import { BRAND } from "@/lib/constants";
import { Calendar, Phone, Clock, MapPin, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Book an Appointment | Consultation Request",
  description:
    "Schedule an initial evaluation or therapy session at GRACE Multidisciplinary Therapy Centre and Hearing Care in Sholinganallur, Chennai.",
};

export default function AppointmentsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
          Clinical Consultation Request
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950">
          Book an Appointment
        </h1>
        <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
          Take the first step toward comprehensive developmental, physical, or hearing care. Fill in the details below, and our clinical coordinator will reach out to schedule your preferred date and time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form Container (8 cols) */}
        <div className="lg:col-span-8">
          <Suspense fallback={<div className="p-12 text-center text-sm text-charcoal-500">Loading appointment form...</div>}>
            <AppointmentForm />
          </Suspense>
        </div>

        {/* Info & Helpline Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Helpline Card */}
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-7 shadow-card border border-navy-800 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Need Direct Assistance?
            </span>
            <h3 className="font-serif font-bold text-xl text-white">
              Speak to Our Clinical Coordinator
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If you have urgent questions regarding assessment availability, developmental milestones, or emergency hearing aid servicing, please call our direct helpline.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${BRAND.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>
          </div>

          {/* Consultation Process Steps */}
          <div className="bg-white rounded-3xl border border-ivory-border p-6 shadow-card space-y-4">
            <h4 className="font-serif font-bold text-navy-950 text-base border-b border-ivory-border pb-2">
              What Happens Next?
            </h4>
            <ol className="space-y-3.5 text-xs text-charcoal-700">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-navy-50 text-navy-900 font-bold flex items-center justify-center flex-shrink-0 text-xs border border-navy-100">
                  1
                </span>
                <div>
                  <strong className="text-navy-950 block font-semibold">Form Received</strong>
                  Our coordination desk registers your preferred service and schedule.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-navy-50 text-navy-900 font-bold flex items-center justify-center flex-shrink-0 text-xs border border-navy-100">
                  2
                </span>
                <div>
                  <strong className="text-navy-950 block font-semibold">Therapist Matching</strong>
                  We check availability with the appropriate licensed clinician.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-navy-50 text-navy-900 font-bold flex items-center justify-center flex-shrink-0 text-xs border border-navy-100">
                  3
                </span>
                <div>
                  <strong className="text-navy-950 block font-semibold">Confirmation Call</strong>
                  We call you to confirm appointment time and share visit preparation guidelines.
                </div>
              </li>
            </ol>
          </div>

          {/* Clinic Timings & Location */}
          <div className="bg-ivory-50 rounded-3xl border border-ivory-border p-6 shadow-subtle space-y-3 text-xs text-charcoal-700">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 block font-semibold">Clinic Timings</strong>
                <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                <p className="text-slate-500">Sunday: By prior appointment only</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-2 border-t border-ivory-border">
              <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 block font-semibold">Location</strong>
                <p>{BRAND.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
