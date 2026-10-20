import React from "react";
import Link from "next/link";
import { SERVICES, BRAND } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Calendar, ShieldCheck, Heart } from "lucide-react";

export const metadata = {
  title: "Clinical Services & Therapies",
  description:
    "Explore our 7 specialized therapy disciplines at GRACE Multidisciplinary Therapy Centre: Speech Therapy, Occupational Therapy, Behavioural Support, Special Education, Physiotherapy, Hearing Care, and Teletherapy.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
            Specialized Care Programs
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950 leading-tight">
            Our 7 Clinical Therapy &amp; Hearing Services
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Each child and individual has distinct strengths and developmental requirements. We tailor evidence-based therapies across our 7 clinical disciplines to help them achieve functional independence and communication confidence.
          </p>
        </div>
      </section>

      {/* Services Grid with Photography Thumbnails */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <ServiceCard key={srv.slug} service={srv} />
          ))}
        </div>
      </section>

      {/* Clinical Guidance Indicator Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
              Guidance for Parents &amp; Families
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              Which Therapy Should We Begin With?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Reviewing the developmental focus areas below can help you understand which discipline addresses your family&apos;s primary observations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy-900 text-navy-950 font-bold uppercase tracking-wider text-xs bg-ivory-50">
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4">Primary Focus Areas</th>
                  <th className="py-3 px-4">Common Observations</th>
                  <th className="py-3 px-4">Delivery Modes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ivory-border">
                {SERVICES.map((s) => (
                  <tr key={s.slug} className="hover:bg-ivory-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-navy-950 whitespace-nowrap">
                      <Link href={`/services/${s.slug}`} className="hover:text-gold-700 underline">
                        {s.name}
                      </Link>
                    </td>
                    <td className="py-3.5 px-4 text-gold-800 font-semibold">{s.shortTag}</td>
                    <td className="py-3.5 px-4 text-charcoal-700">{s.shortDescription}</td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-navy-50 text-navy-900 border border-navy-200 mr-1.5">
                        In-Person
                      </span>
                      {s.isTeletherapyAvailable && (
                        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Online
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
          Not Sure Where to Begin?
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto">
          Our clinical coordinator can arrange a general developmental screening to identify whether single-discipline or combined multidisciplinary therapy is best suited for your child.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/appointments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-navy-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-navy-800 shadow-md transition-all"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Request Initial Screening</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 text-charcoal-800 font-semibold text-xs hover:bg-white transition-colors"
          >
            <span>Ask a Question</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
