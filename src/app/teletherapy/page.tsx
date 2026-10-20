import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Laptop,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Calendar,
  Wifi,
  Video,
  Volume2,
  Clock,
  ArrowRight,
  HelpCircle,
  Phone,
} from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Teletherapy Consultations | Remote Care Guidelines",
  description:
    "Learn how Teletherapy works at GRACE Therapy Centre. Remote speech therapy and family coaching, technology checklist, privacy guidelines, and session requests in Chennai.",
};

export default function TeletherapyPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Hero */}
      <section className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-flex items-center gap-1.5">
              <Laptop className="w-3.5 h-3.5" />
              <span>Remote Clinical Care</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950 leading-tight">
              Virtual Teletherapy &amp; Family Guidance
            </h1>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              Bringing speech therapy, developmental parent coaching, and follow-up clinical reviews directly into your home. Structured, interactive, and clinician-guided.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/appointments?service=Teletherapy&mode=online"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-md transition-all"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Request Teletherapy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BRAND.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 text-charcoal-800 font-semibold text-xs hover:bg-ivory-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call for Suitability Check</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-subtle border border-ivory-border bg-slate-100">
              <Image
                src="/images/teletherapy.jpg"
                alt="Therapist conducting virtual video consultation on laptop"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Realistic Scope Notice */}
      <section className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
        <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
        <div className="space-y-1.5 text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong className="block font-bold text-sm sm:text-base text-amber-950">
            Important Clinical Note on Teletherapy Availability
          </strong>
          <p>
            Teletherapy is a powerful option for many families, but it is not universally appropriate for all clinical interventions. Hands-on sensory integration, paediatric physiotherapy, and physical ear examinations require in-person clinic visits. Teletherapy availability depends on therapist evaluation, child age, attention span, and specific treatment goals. We never guarantee treatment outcomes or replace emergency care.
          </p>
        </div>
      </section>

      {/* How It Works (3 Steps) */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
            The Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            How Teletherapy Works at GRACE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-ivory-border p-7 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 font-bold font-serif">
              1
            </div>
            <h3 className="font-serif font-bold text-lg text-navy-950">
              Initial Suitability Screening
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Before scheduling virtual sessions, our therapist reviews your child&apos;s profile and communicates with you to confirm whether remote video engagement matches your goals.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-ivory-border p-7 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 font-bold font-serif">
              2
            </div>
            <h3 className="font-serif font-bold text-lg text-navy-950">
              Interactive Live Session
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              At your confirmed appointment time, you join a secure video session. The therapist uses visual supports, speech activities, interactive digital tasks, and real-time parent modeling.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-ivory-border p-7 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900 font-bold font-serif">
              3
            </div>
            <h3 className="font-serif font-bold text-lg text-navy-950">
              Home Practice &amp; Follow-Up
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              After each session, you receive clear activity notes to reinforce skills during daily routines (mealtime, play, bedtime), ensuring continuous progress.
            </p>
          </div>
        </div>
      </section>

      {/* Technical & Environmental Checklist */}
      <section className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
            Preparation Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Family Technical &amp; Setup Checklist
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            To ensure an uninterrupted therapeutic experience, please prepare the following before your session:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          <div className="bg-ivory-50 p-5 rounded-xl border border-ivory-border space-y-2">
            <Laptop className="w-5 h-5 text-navy-800" />
            <h4 className="font-bold text-sm text-navy-950">Device Requirement</h4>
            <p className="text-xs text-charcoal-600">
              Laptop, desktop with webcam, or tablet (larger screen preferred over smartphones for interactive visual tasks).
            </p>
          </div>

          <div className="bg-ivory-50 p-5 rounded-xl border border-ivory-border space-y-2">
            <Wifi className="w-5 h-5 text-navy-800" />
            <h4 className="font-bold text-sm text-navy-950">Internet Connectivity</h4>
            <p className="text-xs text-charcoal-600">
              Stable broadband connection (minimum 5 Mbps upload/download recommended) for clear audio and lag-free video.
            </p>
          </div>

          <div className="bg-ivory-50 p-5 rounded-xl border border-ivory-border space-y-2">
            <Volume2 className="w-5 h-5 text-navy-800" />
            <h4 className="font-bold text-sm text-navy-950">Quiet Environment</h4>
            <p className="text-xs text-charcoal-600">
              A well-lit, quiet room with minimal background distractions, television noise, or sibling interruptions.
            </p>
          </div>

          <div className="bg-ivory-50 p-5 rounded-xl border border-ivory-border space-y-2">
            <ShieldCheck className="w-5 h-5 text-navy-800" />
            <h4 className="font-bold text-sm text-navy-950">Parental Presence</h4>
            <p className="text-xs text-charcoal-600">
              For children under 10, an adult caregiver must remain present to assist with technical handling and reinforcement.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Considerations */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 space-y-6 border border-navy-800">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Confidentiality
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Privacy &amp; Security Considerations
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            We hold healthcare consultations to high standards of ethical privacy:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
          <div className="space-y-2">
            <strong className="block text-white font-semibold">No Unauthorized Recording</strong>
            <p>Sessions are never recorded without explicit written consent from both the family and therapist.</p>
          </div>
          <div className="space-y-2">
            <strong className="block text-white font-semibold">Private Consultation Links</strong>
            <p>Every session uses a unique, encrypted room link shared privately with the family prior to start time.</p>
          </div>
          <div className="space-y-2">
            <strong className="block text-white font-semibold">Strict Clinical Records</strong>
            <p>Therapy progress notes are maintained strictly in accordance with confidential healthcare guidelines.</p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="text-center bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-5">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
          Ready to Begin Teletherapy?
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto">
          Submit an appointment request with Teletherapy selected, and our team will contact you to schedule an initial consultation.
        </p>
        <Link
          href="/appointments?service=Teletherapy&mode=online"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-md transition-all"
        >
          <Calendar className="w-4 h-4 text-gold-400" />
          <span>Book Teletherapy Session</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
