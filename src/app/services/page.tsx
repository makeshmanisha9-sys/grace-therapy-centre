import React from "react";
import Link from "next/link";
import { SERVICES, BRAND } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Calendar, ShieldCheck, Heart, Sparkles, Ear } from "lucide-react";

export const metadata = {
  title: `Our Services | ${BRAND.name}`,
  description:
    `Explore our multidisciplinary therapy disciplines and clinical programmes at ${BRAND.name}: Speech and Language Therapy, Occupational Therapy, Behavioural Therapy, Special Education, Physiotherapy, Early Intervention, Group Therapy, Adult Rehabilitation, Parent Workshops, and Hearing Care in Sholinganallur, Chennai.`,
};

export default function ServicesPage() {
  // Primary core disciplines (excluding Teletherapy from the primary snapshot/listing)
  const coreServices = SERVICES.filter((s) => s.isPrimaryService && s.slug !== "teletherapy");
  const additionalServices = SERVICES.filter((s) => !s.isPrimaryService && s.slug !== "teletherapy");

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
            Specialized Care Programmes
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950 leading-tight">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-serif text-gold-900">
            {BRAND.headline}
          </p>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            Built on a clinical foundation of over 25 years of professional experience in Speech-Language Pathology and Paediatric Rehabilitation, our multidisciplinary approach provides empathetic, evidence-informed care.
          </p>
        </div>
      </section>

      {/* Primary Clinical Disciplines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-ivory-border pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl font-serif font-bold text-navy-950">
              Core Clinical Disciplines
            </h2>
            <p className="text-xs text-charcoal-600">
              Hearing Care, Speech &amp; Language, Occupational Therapy, Behavioural Support, Special Education, Physiotherapy, Early Intervention, Group Therapy, Adult Rehabilitation &amp; Parent Workshops.
            </p>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200 self-start sm:self-auto">
            Client-Approved Disciplines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((srv) => (
            <ServiceCard
              key={srv.slug}
              service={srv}
              featured={srv.slug === "hearing-care" || srv.slug === "speech-and-language-therapy"}
            />
          ))}
        </div>
      </section>

      {/* Additional Documented Programmes */}
      {additionalServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-ivory-border pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2 className="text-2xl font-serif font-bold text-navy-950">
                Additional Documented Clinical Programmes
              </h2>
              <p className="text-xs text-charcoal-600">
                Psychological Counselling &amp; Cognitive Retraining.
              </p>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-navy-50 px-3 py-1 rounded-full border border-navy-200 self-start sm:self-auto">
              Specialized Support
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((srv) => (
              <ServiceCard key={srv.slug} service={srv} />
            ))}
          </div>
        </section>
      )}

      {/* Clinical Guidance Indicator Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
              Guidance for Parents &amp; Families
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              Which Therapy Discipline Meets Your Needs?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Reviewing the developmental focus areas below can help you understand which discipline addresses your family&apos;s observations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy-900 text-navy-950 font-bold uppercase tracking-wider text-xs bg-ivory-50">
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4">Primary Focus Areas</th>
                  <th className="py-3 px-4">Common Observations</th>
                  <th className="py-3 px-4">Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ivory-border">
                {SERVICES.filter((s) => s.slug !== "teletherapy").map((s) => (
                  <tr key={s.slug} className="hover:bg-ivory-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-navy-950 whitespace-nowrap">
                      <Link
                        href={s.slug === "hearing-care" ? "/hearing-care" : `/services/${s.slug}`}
                        className="hover:text-gold-700 underline"
                      >
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
          Our clinical coordinator can arrange a comprehensive developmental or audiometric screening to identify whether single-discipline or combined multidisciplinary care is best suited for your needs.
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
