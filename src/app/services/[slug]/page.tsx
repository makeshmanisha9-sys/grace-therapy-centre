import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  SERVICES,
  BRAND,
  ServiceInfo,
} from "@/lib/constants";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Laptop,
  MessageCircle,
  Hand,
  BrainCircuit,
  BookOpen,
  Activity,
  Ear,
  Phone,
  HelpCircle,
  Heart,
  Users,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  MessageCircle,
  Hand,
  BrainCircuit,
  BookOpen,
  Activity,
  Ear,
  Laptop,
  Users,
  Heart,
};

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  SERVICES.forEach((s) => {
    params.push({ slug: s.slug });
    if (s.aliases) {
      s.aliases.forEach((alias) => params.push({ slug: alias }));
    }
  });
  return params;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(
    (s) => s.slug === params.slug || s.aliases?.includes(params.slug)
  );
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} | GRACE Therapy Centre Chennai`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find(
    (s) => s.slug === params.slug || s.aliases?.includes(params.slug)
  );

  if (!service) {
    notFound();
  }

  const IconComponent = ICON_MAP[service.iconName] || MessageCircle;

  return (
    <div className="py-10 sm:py-16 space-y-14 sm:space-y-20">
      {/* Editorial Header with Service Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-6 sm:p-12 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-800">
                  <IconComponent className="w-6 h-6 flex-shrink-0" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                  Clinical Discipline
                </span>
                {service.isTeletherapyAvailable && (
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Available via Teletherapy</span>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg font-medium text-gold-800 font-serif">
                {service.shortTag}
              </p>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Direct Booking CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href={`/appointments?service=${encodeURIComponent(service.name)}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-md hover:shadow-goldGlow transition-all"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Book {service.name} Session</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-navy-900 bg-ivory-50 border border-ivory-border hover:bg-ivory-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>Speak with Clinical Desk</span>
                </a>
              </div>
            </div>

            {/* Right Photography (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-card border-2 border-gold-300/60 bg-slate-100">
                <Image
                  src={service.imageUrl}
                  alt={`${service.name} clinical session at GRACE Centre`}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md p-3 rounded-xl border border-gold-400/40 text-xs text-white font-medium flex items-center gap-2 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Evidence-Based Paediatric &amp; Adult Clinical Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column Details: Who It Is For & Key Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who It Is For */}
          <div className="bg-white rounded-3xl border border-ivory-border p-8 shadow-card space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Clinical Indicators
            </span>
            <h2 className="text-2xl font-serif font-bold text-navy-950">
              Who Benefits from {service.name}?
            </h2>
            <p className="text-xs text-charcoal-600">
              Consider booking an assessment if you observe any of the following signs:
            </p>
            <ul className="space-y-3 pt-2">
              {service.whoItIsFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="bg-white rounded-3xl border border-ivory-border p-8 shadow-card space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Therapy Goals &amp; Outcomes
            </span>
            <h2 className="text-2xl font-serif font-bold text-navy-950">
              Targeted Therapeutic Benefits
            </h2>
            <p className="text-xs text-charcoal-600">
              In accordance with ethical clinical guidelines, milestones are tailored individually without false promises of universal timelines:
            </p>
            <ul className="space-y-3 pt-2">
              {service.keyBenefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Clinical Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-50 rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
              Evidence-Based Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              How We Conduct {service.name}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Our clinicians use structured, engaging techniques grounded in international clinical standards:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-3">
            {service.therapyApproach.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-ivory-border p-6 shadow-subtle space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-ivory-border pt-10">
          <h3 className="font-serif font-bold text-navy-950 text-xl mb-6">
            Explore Other Disciplines at GRACE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.slug !== service.slug).map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group p-4 rounded-xl bg-white border border-ivory-border hover:border-gold-300 hover:shadow-card transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image
                      src={other.imageUrl}
                      alt={other.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-navy-950 group-hover:text-gold-800 transition-colors">
                      {other.name}
                    </h4>
                    <p className="text-[11px] text-charcoal-500 line-clamp-1">
                      {other.shortTag}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-charcoal-400 group-hover:text-gold-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
