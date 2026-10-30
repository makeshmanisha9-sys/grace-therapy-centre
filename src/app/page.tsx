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
  ChevronRight,
} from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";
import MapEmbed from "@/components/MapEmbed";

export default function HomePage() {
  const primaryServices = SERVICES.filter((s) => s.isPrimaryService);
  const additionalServices = SERVICES.filter((s) => !s.isPrimaryService);

  return (
    <div className="space-y-20 sm:space-y-28 overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION — EDITORIAL SPLIT WITH AUTHENTIC HEALTHCARE PHOTOGRAPHY
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 border-b border-ivory-border/60">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-gold-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 -z-10 w-[400px] h-[400px] bg-navy-100/35 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Brand Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold-300/80 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-gold-600 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-navy-950">
                  {BRAND.name}
                </span>
              </div>

              {/* Primary Approved Headline */}
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif font-bold text-navy-950 tracking-tight leading-[1.14]">
                Experience, Compassion and Care — Empowering Every Individual to Reach Their Potential.
              </h1>

              {/* Supporting Tagline & Warm Approved Copy */}
              <div className="space-y-3">
                <p className="text-lg sm:text-xl font-medium text-gold-800 font-serif">
                  {BRAND.tagline}
                </p>
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed max-w-2xl">
                  Supporting individuals to grow, learn, communicate, and lead more independent and fulfilling lives. Built on a clinical foundation of over 25 years of professional experience in Speech-Language Pathology and Paediatric Rehabilitation, our multidisciplinary team provides empathetic, evidence-based care in Sholinganallur, Chennai.
                </p>
              </div>

              {/* Core Supporting Words */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
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
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
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
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-ivory-border flex flex-wrap items-center gap-6 text-xs text-charcoal-600">
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

            {/* Right Editorial Visual (5 cols) — High Quality Authentic Healthcare Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background ambient glow */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-gold-300/30 via-navy-100/30 to-gold-200/20 rounded-3xl blur-xl" />

                {/* Primary Editorial Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-cardHover border border-ivory-border bg-white">
                  <div className="relative w-full h-[400px] sm:h-[480px]">
                    <Image
                      src="/images/hero-therapy.jpg"
                      alt="Caring paediatric therapist engaging in developmental play and speech session with child"
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover object-center"
                      priority
                    />
                    {/* Subtle soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />

                    {/* Integrated floating story badge */}
                    <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-ivory-border shadow-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 flex-shrink-0">
                          <Heart className="w-5 h-5 fill-gold-400/20 text-gold-600" />
                        </div>
                        <div>
                          <p className="font-serif font-bold text-navy-950 text-sm">
                            Every Individual Matters
                          </p>
                          <p className="text-xs text-charcoal-600">
                            Every Ability Counts &bull; Every Step Forward Is Progress
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Helpline Pill */}
                <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-navy-900 text-white px-4 py-2.5 rounded-2xl shadow-floating border border-gold-400/60 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-300 block font-medium">
                      Direct Helpline
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
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT & MULTIDISCIPLINARY COLLABORATION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-subtle border border-ivory-border">
                <Image
                  src="/images/about-multidisciplinary.jpg"
                  alt="Modern, welcoming therapy and consultation space at GRACE Centre"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-navy-950/70 backdrop-blur-sm p-3 rounded-xl border border-navy-800">
                  <span className="font-semibold block text-gold-300">Sholinganallur Clinic</span>
                  Dedicated consultation rooms and sound-treated testing suites.
                </div>
              </div>
            </div>

            {/* Text (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
                  Multidisciplinary Synergy
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-950 leading-tight">
                  Compassionate Care Guided by Science &amp; Multidisciplinary Collaboration
                </h2>
              </div>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Developmental and rehabilitation challenges are multifaceted. A delay in speech clarity often intertwines with sensory sensitivities, motor coordination, cognitive processing, or auditory thresholds. Built on a clinical foundation of over 25 years of professional experience in Speech-Language Pathology and Paediatric Rehabilitation, GRACE brings Audiologists, Speech-Language Pathologists, Occupational Therapists, Behavioural Therapists, Special Educators, Physiotherapists, and Psychological Counselors into one collaborative team for children, adults, and families.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-border space-y-1.5">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>Integrated Clinical Evaluations</span>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    Multidisciplinary clinicians confer collectively to align strategies rather than offering disjointed advice.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-border space-y-1.5">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>Family Empowerment &amp; Guidance</span>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    Practical home techniques to reinforce learning, speech, and motor milestones during everyday family routines.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-700 transition-colors"
                >
                  <span>Learn more about our mission, vision &amp; clinical foundation</span>
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
          {/* Subtle gold decorative gradient line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              The GRACE Clinical Pathway
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Our 4-Step Personalised Therapy Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We never apply cookie-cutter treatment plans. Every individual receives a structured, transparent, milestone-focused progression.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                icon: ClipboardCheck,
                title: "Comprehensive Assessment",
                description:
                  "Clinical observation, standardized screening, sensory profile reviews, or audiometric tests to map individual strengths and needs.",
              },
              {
                step: "02",
                icon: Target,
                title: "Collaborative Goal Setting",
                description:
                  "Formulating an Individualized Plan with functional, achievable milestones agreed upon with parents and caregivers.",
              },
              {
                step: "03",
                icon: Activity,
                title: "Multidisciplinary Therapy",
                description:
                  "Engaging, evidence-based sessions that systematically integrate speech, motor, behavioral, sensory, and cognitive techniques.",
              },
              {
                step: "04",
                icon: Smile,
                title: "Review & Home Coaching",
                description:
                  "Regular milestone reassessments, transparent progress tracking, and practical home strategies for ongoing family success.",
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-navy-900/80 rounded-2xl border border-navy-800 p-6 flex flex-col justify-between hover:border-gold-400/50 transition-colors"
                >
                  <div className="space-y-4">
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
          4. OUR SERVICES (6 PRIMARY DISCIPLINES IN EXACT ORDER + DOCUMENTED PROGRAMMES)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
            Multidisciplinary Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950">
            Our Services
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto">
            Grounded in over 25 years of clinical foundation in Speech-Language Pathology and Paediatric Rehabilitation, our integrated disciplines support individuals across developmental, communication, and rehabilitation journeys.
          </p>
        </div>

        {/* 6 Primary Services in exact order */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-ivory-border pb-3">
            <div>
              <h3 className="font-serif font-bold text-xl text-navy-950">
                Primary Clinical Disciplines
              </h3>
              <p className="text-xs text-charcoal-500">
                Hearing Care &bull; Speech and Language &bull; Teletherapy &bull; Occupational &bull; Behavioural &bull; Group Therapy
              </p>
            </div>
            <span className="text-xs font-semibold text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200 hidden sm:inline-block">
              Core Clinical Care
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {primaryServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                featured={service.slug === "hearing-care" || service.slug === "speech-and-language-therapy"}
              />
            ))}
          </div>
        </div>

        {/* Additional Documented Programmes */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-ivory-border pb-3">
            <div>
              <h3 className="font-serif font-bold text-xl text-navy-950">
                Additional Documented Programmes &amp; Rehabilitation
              </h3>
              <p className="text-xs text-charcoal-500">
                Special Education &bull; Physiotherapy &bull; Psychological Counselling &bull; Adult Rehabilitation &bull; Cognitive Retraining &bull; Parent Workshops
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-navy-900 hover:text-gold-700 flex items-center gap-1"
            >
              <span>Explore All Disciplines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {additionalServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                featured={false}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-navy-900 bg-white border border-ivory-border hover:border-gold-400 shadow-subtle hover:shadow-card transition-all"
          >
            <span>Compare Clinical Methodologies &amp; Assessment Tools</span>
            <ArrowRight className="w-4 h-4 text-gold-600" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          5. TELETHERAPY SPOTLIGHT — REFINED EDITORIAL PRESENTATION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-50/80 via-ivory to-navy-50/60 rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <Laptop className="w-3.5 h-3.5" />
                <span>Virtual Clinical Consultations</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-950 leading-tight">
                Teletherapy: Expert Therapy &amp; Guidance from the Comfort of Home
              </h2>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                For families outside Chennai, frequent travellers, or parents seeking continuous coaching between clinic visits, our Teletherapy service connects you securely with our certified speech pathologists and behavioural therapists.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal-700 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Real-time parent coaching in daily routines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Interactive digital speech and language exercises</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Pre-consultation clinical suitability screening</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>No travel stress or commuting fatigue</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
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
                  <span>Review Technical Requirements</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Photography (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-72 sm:h-84 rounded-2xl overflow-hidden shadow-card border border-ivory-border bg-slate-100">
                <Image
                  src="/images/teletherapy.jpg"
                  alt="Therapist conducting interactive virtual consultation on laptop screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FAQ ACCORDION PREVIEW
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
          7. LOCATION & INTERACTIVE MAP
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
            Located in Sai Garden, Villa A, on Village High Road with dedicated parking and accessible consultation spaces.
          </p>
        </div>

        <MapEmbed />
      </section>

      {/* =========================================================================
          8. FINAL CALL TO ACTION BANNER
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