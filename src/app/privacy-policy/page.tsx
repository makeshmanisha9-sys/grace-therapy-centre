import React from "react";
import Link from "next/link";
import { AlertTriangle, ShieldCheck, ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy (Draft) | GRACE Therapy Centre",
  description:
    "Editable draft privacy policy outlining data collection, appointment handling, and contact confidentiality for GRACE Multidisciplinary Therapy Centre.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-800 hover:text-gold-700 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-1">
          Website Legal Notice
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950">
          Privacy Policy &amp; Data Handling (Editable Draft)
        </h1>
        <p className="text-xs text-charcoal-500 mt-2">
          Last Updated: October 2026 • Document Version 1.0 (Draft for Client Handover)
        </p>
      </div>

      {/* Transparent Disclaimer Alert */}
      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-6 flex items-start gap-3.5 text-xs text-amber-900 leading-relaxed">
        <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="block font-bold text-sm text-amber-950 mb-1">
            Important Notice for Website Administrators &amp; Legal Review:
          </strong>
          This document is an editable template draft provided for website deployment. It has not been reviewed by a legal attorney and does not constitute formal legal advice. The management of GRACE Multidisciplinary Therapy Centre and Hearing Care should review and adjust this draft with certified legal counsel to reflect applicable healthcare privacy regulations.
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-warm-border p-8 sm:p-12 shadow-card space-y-8 text-sm text-charcoal-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-navy-900">
            1. Information We Collect
          </h2>
          <p>
            When you interact with our website to request an appointment or submit a contact inquiry, we collect limited personal details strictly necessary for communication and scheduling:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-charcoal-800">
            <li>Patient or child&apos;s name</li>
            <li>Parent or guardian name (when the patient is a minor)</li>
            <li>Contact telephone number</li>
            <li>Email address</li>
            <li>Requested clinical discipline (e.g. Speech Therapy, Audiology, etc.)</li>
            <li>Preferred appointment dates and time preferences</li>
            <li>Voluntary, non-sensitive notes provided by you in the inquiry box</li>
          </ul>
          <p className="text-xs text-charcoal-600 italic">
            *We intentionally do NOT collect sensitive diagnostic health records, psychometric raw data, or medical histories through public web forms. Detailed clinical histories are taken directly by certified therapists during private, in-person consultations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-navy-900">
            2. How We Use Collected Data
          </h2>
          <p>
            Information submitted via this website is used solely by authorized staff at GRACE Multidisciplinary Therapy Centre to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-charcoal-800">
            <li>Review clinical coordinator schedules and therapist availability.</li>
            <li>Call or message you to confirm consultation date, time, and instructions.</li>
            <li>Respond to general questions sent through our contact form.</li>
            <li>Prevent automated spam submissions and ensure website integrity.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-navy-900">
            3. Confidentiality &amp; Third-Party Disclosure
          </h2>
          <p>
            We respect client trust. We do NOT sell, rent, monetize, or publicly disclose your contact details or appointment records to any marketing brokers, advertising networks, or unauthorized third parties.
          </p>
          <p>
            Personal data is transmitted through encrypted HTTPS channels and is accessible only to authenticated clinic administrative personnel. Personal details are never embedded in public URL parameters or published logs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-navy-900">
            4. Appointment Requests vs. Confirmed Bookings
          </h2>
          <p>
            Submission of the online appointment request form does not constitute a guaranteed clinical booking. All therapy sessions are subject to clinician evaluation, schedule availability, and formal telephonic confirmation by our staff.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-navy-900">
            5. Data Retention &amp; Your Rights
          </h2>
          <p>
            You may at any time request that your contact inquiry or pending appointment record be updated, corrected, or permanently deleted from our records by emailing{" "}
            <a
              href={`mailto:${BRAND.email}`}
              className="text-navy-900 font-semibold underline"
            >
              {BRAND.email}
            </a>{" "}
            or calling our centre at{" "}
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="text-navy-900 font-semibold underline"
            >
              {BRAND.phone}
            </a>.
          </p>
        </section>

        <section className="space-y-3 border-t border-warm-border pt-6">
          <h2 className="font-serif font-bold text-lg text-navy-900">
            6. Contacting the Clinic Regarding Privacy
          </h2>
          <p className="text-xs text-charcoal-600">
            If you have questions about this draft policy or our data management procedures, please contact:
          </p>
          <div className="text-xs text-navy-950 font-medium space-y-1 bg-warm-white p-4 rounded-xl border border-warm-border">
            <p><strong>GRACE Multidisciplinary Therapy Centre and Hearing Care</strong></p>
            <p>{BRAND.address}</p>
            <p>Email: {BRAND.email}</p>
            <p>Phone: {BRAND.phone}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
