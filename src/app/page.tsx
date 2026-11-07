import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  Heart,
  Users,
  CheckCircle2,
  Laptop,
  Ear,
  MapPin,
  Clock,
  Sparkles,
  ClipboardCheck,
  Target,
  Smile,
  Activity,
  MessageCircle,
  Hand,
  BrainCircuit,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";
import MapEmbed from "@/components/MapEmbed";

const SNAPSHOT_ICONS: Record<string, React.ElementType> = {
  "hearing-care": Ear,
  "speech-and-language-therapy": MessageCircle,
  "occupational-therapy": Hand,
  "behavioural-therapy": BrainCircuit,
  "special-education": BookOpen,
  physiotherapy: Activity,
  "early-intervention": Sparkles,
  "group-therapy": Users,
  "adult-rehabilitation": Activity,
  "parent-workshops-and-training": BookOpen,
};

export default function HomePage() {
  // Services for the first viewport snapshot (Teletherapy excluded per client instructions)
  const snapshotServices = SERVICES.filter(
    (s) => s.slug !== "teletherapy" && s.slug !== "cognitive-rehabilitation" && s.slug !== "psychological-counselling"
  );

  // Core clinical services for detailed cards section
  const detailedServices = SERVICES.filter((s) => s.slug !== "teletherapy");

  return (
    <div className="space-y-16 sm:space-y-24 overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION & IMMEDIATE FIRST-VIEWPORT SERVICE SNAPSHOT
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-ivory-border/70">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-gold-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 -z-10 w-[400px] h-[400px] bg-navy-100/35 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Main Hero Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Official Brand Identity Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold-300/80 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-gold-600 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-navy-950">
                  {BRAND.name}
                </span>
              </div>

              {/* Primary Approved Headline - Medium font size */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-navy-950 tracking-tight leading-snug">
                Experience, Compassion and Care — Empowering Every Individual to Reach Their Potential.
              </h1>

              {/* Supporting Tagline & Approved Copy */}
              <div className="space-y-2.5">
                <p className="text-base sm:text-lg font-medium text-gold-800 font-serif">
                  {BRAND.tagline}
                </p>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-2xl">
                  {BRAND.supportingText}
                </p>
              </div>

              {/* Core Supporting Words */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {BRAND.supportingWords.map((word) => (
                  <span
                    key={word}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-50 text-navy-900 font-bold text-xs tracking-wider border border-navy-100"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>{word}</span>
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/appointments"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-md hover:shadow-goldGlow transition-all duration-200"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-navy-900 bg-white hover:bg-ivory-200 border border-ivory-border shadow-subtle transition-all duration-200"
                >
                  <span>Explore Our Services</span>
                </Link>

                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-semibold text-charcoal-700 hover:text-navy-950 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>{BRAND.phone}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-ivory-border flex flex-wrap items-center gap-5 text-xs text-charcoal-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>25+ Years Clinical Foundation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-navy-800 flex-shrink-0" />
                  <span>Paediatric &amp; Adult Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-gold-600 flex-shrink-0" />
                  <span>Empathetic, Family-Centred</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Visual (5 cols) — Authentic Healthcare Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-3 bg-gradient-to-tr from-gold-300/35 via-navy-100/30 to-gold-200/25 rounded-3xl blur-xl" />

                <div className="relative rounded-3xl overflow-hidden shadow-cardHover border-2 border-gold-300/70 bg-white ring-1 ring-gold-400/20">
                  <div className="relative w-full h-[360px] sm:h-[440px]">
                    <Image
                      src="/images/hero-therapy.jpg"
                      alt="Qualified therapist warmly interacting with a child during therapy session at Grace Multi-Therapy & Hearing Care Centre"
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/20 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

                    {/* Integrated floating brand statement */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-gold-300/80 shadow-md">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 flex-shrink-0">
                          <Heart className="w-4 h-4 fill-gold-400/20 text-gold-600" />
                        </div>
                        <div>
                          <p className="font-serif font-bold text-navy-950 text-xs sm:text-sm">
                            {BRAND.brandStatement}
                          </p>
                          <p className="text-[11px] text-charcoal-600 mt-0.5">
                            {BRAND.name} &bull; Sholinganallur, Chennai
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Direct Helpline */}
                <div className="absolute -bottom-3 -left-2 sm:-left-4 bg-navy-900 text-white px-3.5 py-2 rounded-2xl shadow-floating border border-gold-400/60 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-navy-800 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-300 block font-medium">
                      Consultation Desk
                    </span>
                    <a
                      href={`tel:${BRAND.phoneClean}`}
                      className="text-xs font-bold text-white hover:text-gold-300 transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              FIRST VIEWPORT SNAPSHOT: OUR SERVICES VISIBLE ON THE FIRST SCREEN
              (Addresses Client Feedback: "all centres mention the services they provide in the first snapshot")
              ========================================================================= */}
          <div className="pt-6 sm:pt-8 border-t border-ivory-border/80">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-navy-950">
                  Our Clinical Services at a Glance
                </h2>
                <span className="text-[11px] text-charcoal-500 hidden md:inline">
                  &bull; Instant overview of multidisciplinary care
                </span>
              </div>
              <Link
                href="/services"
                className="text-xs font-bold text-navy-900 hover:text-gold-700 inline-flex items-center gap-1 transition-colors self-start sm:self-auto"
              >
                <span>View Full Service Directory</span>
                <ChevronRight className="w-3.5 h-3.5 text-gold-600" />
              </Link>
            </div>

            {/* Responsive Snapshot Service Grid / Horizontal Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {snapshotServices.map((srv) => {
                const IconComp = SNAPSHOT_ICONS[srv.slug] || Sparkles;
                const targetUrl =
                  srv.slug === "hearing-care" ? "/hearing-care" : `/services/${srv.slug}`;

                return (
                  <Link
                    key={srv.slug}
                    href={targetUrl}
                    className="group bg-white rounded-xl border border-ivory-border hover:border-gold-400 p-3.5 flex flex-col justify-between shadow-subtle hover:shadow-card transition-all duration-200"
                  >
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-navy-50 group-hover:bg-navy-900 border border-navy-100 flex items-center justify-center text-navy-900 group-hover:text-gold-400 transition-colors">
                        <IconComp className="w-4 h-4 flex-shrink-0" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-xs sm:text-sm text-navy-950 group-hover:text-gold-900 transition-colors leading-tight line-clamp-1">
                          {srv.name}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-charcoal-500 line-clamp-2 mt-0.5 leading-snug">
                          {srv.shortTag}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 mt-1 border-t border-ivory-100 flex items-center justify-between text-[10px] font-bold text-navy-900 group-hover:text-gold-700">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 text-gold-600 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT US & CLIENT-APPROVED CONTENT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-card border-2 border-gold-300/50 bg-slate-100">
                <Image
                  src="/images/about-multidisciplinary.jpg"
                  alt="Multidisciplinary child development session at Grace Multi-Therapy & Hearing Care Centre"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-navy-950/90 backdrop-blur-md p-3.5 rounded-xl border border-gold-400/40 shadow-sm flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gold-300">Sholinganallur Clinical Facility</span>
                    <span className="text-[11px] text-slate-200">Acoustic suites, sensory integration gym &amp; clinical cabins</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Narrative (7 cols) - Full Client Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
                  About Us
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 leading-tight">
                  Experience, Compassion and Care — Empowering Every Individual to Reach Their Potential.
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                <p>
                  At <strong className="text-navy-950">{BRAND.name}</strong>, we believe that every individual has the potential to grow, learn, communicate, and lead a more independent and fulfilling life. With the right guidance, appropriate intervention, and a supportive environment, every step forward can make a meaningful difference.
                </p>
                <p>
                  With over 25 years of professional experience in Speech-Language Pathology and Paediatric Rehabilitation, our clinical foundation is built on a deep understanding of individual needs, developmental differences, communication challenges, and the importance of family involvement.
                </p>
                <p>
                  Our vision extends beyond therapy sessions. We strive to create an environment where children receive the support they need to develop and thrive, adults are guided towards improving their functional abilities and independence, and families feel understood, supported, and empowered throughout their journey.
                </p>
              </div>

              {/* Approach to Care highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-ivory-50 border border-ivory-border space-y-1">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>Individualized &amp; Collaborative</span>
                  </div>
                  <p className="text-[11px] text-charcoal-600 leading-relaxed">
                    Professionals work collaboratively, families are actively involved, and therapy is connected to real-life needs.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-ivory-50 border border-ivory-border space-y-1">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>Child &amp; Adult Rehabilitation</span>
                  </div>
                  <p className="text-[11px] text-charcoal-600 leading-relaxed">
                    Supporting children in early milestones and adults regaining abilities after stroke or neurological conditions.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-700 transition-colors"
                >
                  <span>Read our complete story, vision, mission &amp; commitment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR 4-STEP PERSONALISED CARE PATHWAY
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-14 border border-navy-800/80 shadow-cardHover relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              The GRACE Pathway
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Our 4-Step Personalised Therapy Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every individual receives a structured, transparent, and collaborative clinical progression.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                icon: ClipboardCheck,
                title: "Assessment",
                description:
                  "Clinical observation, standardized screening, sensory reviews, or audiometric tests to understand strengths and specific needs.",
              },
              {
                step: "02",
                icon: Target,
                title: "Goal Setting",
                description:
                  "Developing individualized therapeutic programmes with functional, achievable milestones agreed upon with families.",
              },
              {
                step: "03",
                icon: Activity,
                title: "Therapy",
                description:
                  "Engaging, evidence-informed sessions that systematically address communication, movement, behaviour, learning, or hearing.",
              },
              {
                step: "04",
                icon: Smile,
                title: "Progress Review",
                description:
                  "Regular milestone reviews, reassessments, and practical parent guidance to reinforce development at home.",
              },
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-navy-900/80 rounded-2xl border border-navy-800 p-6 flex flex-col justify-between hover:border-gold-400/50 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-serif font-bold text-gold-400">
                        {item.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center text-gold-400">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-base text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. COMPREHENSIVE SERVICES SECTION (CLIENT DOCUMENTED SERVICES)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
            Multidisciplinary Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950">
            Our Services
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto">
            Built on a clinical foundation of over 25 years of professional experience in Speech-Language Pathology and Paediatric Rehabilitation, our multidisciplinary approach provides empathetic, evidence-informed care.
          </p>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {detailedServices.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              featured={service.slug === "hearing-care" || service.slug === "speech-and-language-therapy"}
            />
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-navy-900 bg-white border border-ivory-border hover:border-gold-400 shadow-subtle hover:shadow-card transition-all"
          >
            <span>View Full Service Comparison Matrix</span>
            <ArrowRight className="w-4 h-4 text-gold-600" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          5. DEDICATED HEARING CARE HIGHLIGHT BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl border border-gold-400/40 p-8 sm:p-12 text-white shadow-cardHover relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 text-gold-300 border border-gold-500/30 text-xs font-semibold">
                <Ear className="w-3.5 h-3.5 text-gold-400" />
                <span>Dedicated Hearing Care Service</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Hearing Care: Hear Better. Connect Better. Live Better.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Comprehensive audiometric evaluations, Pure Tone Audiometry (PTA), hearing screening, and hearing aid consultation, selection, fitting, programming, and ongoing support for children and adults.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/hearing-care"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-navy-950 bg-gold-400 hover:bg-gold-500 shadow-sm transition-all"
                >
                  <span>Explore Dedicated Hearing Care Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/appointments?service=Hearing%20Care"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-navy-800 hover:bg-navy-700 border border-navy-700 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  <span>Book Hearing Test</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 relative">
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-gold-400/40 shadow-card">
                <Image
                  src="/images/hearing-care.jpg"
                  alt="Audiologist conducting pure tone audiometry evaluation"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white font-medium bg-navy-950/80 p-2.5 rounded-lg border border-gold-400/30">
                  Pure Tone Audiometry &bull; Screening &bull; Hearing Aid Trials
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TELETHERAPY SPOTLIGHT (PRESERVED AS INFORMATIVE FEATURE SECTION)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-50/80 via-ivory to-navy-50/60 rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <Laptop className="w-3.5 h-3.5" />
                <span>Virtual Clinical Consultations</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 leading-tight">
                Teletherapy: Expert Therapy &amp; Guidance from the Comfort of Home
              </h2>

              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                For families residing outside Chennai, frequent travellers, or parents seeking structured coaching between in-person clinic visits, our Teletherapy service connects you securely with our certified specialists.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-charcoal-700 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Real-time parent coaching in daily routines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Interactive digital speech exercises</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Pre-consultation suitability screening</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>No travel stress or commuting fatigue</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/appointments?service=Teletherapy&mode=online"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-md transition-all"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  <span>Request Teletherapy Session</span>
                </Link>
                <Link
                  href="/teletherapy"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl border border-slate-300 text-charcoal-800 font-semibold text-xs hover:bg-white transition-colors"
                >
                  <span>Review Remote Requirements</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-card border-2 border-gold-300/50 bg-slate-100">
                <Image
                  src="/images/teletherapy.jpg"
                  alt="Therapist conducting interactive virtual consultation on laptop screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md p-3.5 rounded-xl border border-gold-400/40 text-white text-xs flex items-center gap-2.5 shadow-sm">
                  <Laptop className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-gold-300">Virtual Therapy Platform</span>
                    <span className="text-[11px] text-slate-300">Secure, therapist-guided video care from home</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FAQ ACCORDION PREVIEW
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Transparent answers regarding visits, referrals, hearing trials, and clinical protocols.
          </p>
        </div>

        <FaqAccordion />

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-xs font-bold text-navy-900 hover:text-gold-700 inline-flex items-center gap-1"
          >
            <span>View All Clinic Preparation FAQs</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          8. LOCATION & INTERACTIVE MAP
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
            Convenient Chennai Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Visit Our Therapy Centre in Sholinganallur
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            {BRAND.address}
          </p>
        </div>

        <MapEmbed />
      </section>

      {/* =========================================================================
          9. FINAL CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden border border-gold-400/30 shadow-cardHover">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-navy-800/80 px-3.5 py-1 rounded-full border border-gold-400/30">
              Start Your Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
              {BRAND.brandStatement}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Supporting individuals to grow, learn, communicate, and lead more independent and fulfilling lives. Experience, compassion, and care under one roof.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href="/appointments"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-navy-950 bg-gold-400 hover:bg-gold-500 shadow-goldGlow transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Consultation</span>
              </Link>
              <a
                href={`tel:${BRAND.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white border border-slate-400/80 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
