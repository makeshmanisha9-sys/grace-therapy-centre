import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Ear,
  Phone,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Volume2,
  Sliders,
  Sparkles,
  Heart,
  Users,
  Settings,
  HelpCircle,
  Clock,
  MapPin,
  Mail,
} from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Hearing Care & Audiometric Evaluation | Grace Multi-Therapy & Hearing Care Centre",
  description:
    "Comprehensive audiometric evaluation, Pure Tone Audiometry (PTA), hearing screening, and hearing aid consultation, fitting, and support at Grace Multi-Therapy & Hearing Care Centre in Sholinganallur, Chennai.",
};

export default function HearingCarePage() {
  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* =========================================================================
          1. HERO SECTION — PREMIUM HEARING CARE EDITORIAL SPLIT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-6 sm:p-12 lg:p-14 shadow-card overflow-hidden relative">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900 shadow-subtle">
                  <Ear className="w-6 h-6 text-gold-600 flex-shrink-0" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
                  Dedicated Audiology &amp; Hearing Services
                </span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight">
                  Hearing Care
                </h1>
                <p className="text-lg sm:text-xl font-medium text-gold-800 font-serif mt-2">
                  Hear Better. Connect Better. Live Better.
                </p>
              </div>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Hearing plays an essential role in communication, learning, social interaction, and overall quality of life. Hearing difficulties can affect individuals at any age, from infants and children developing speech and language skills to adults experiencing gradual hearing loss.
              </p>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                At <strong className="text-navy-950">{BRAND.name}</strong>, we aim to support individuals and families through appropriate hearing evaluation, guidance, and hearing aid solutions tailored to their needs. Our focus is on helping every individual access sound more effectively and participate more confidently in everyday communication.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/appointments?service=Hearing%20Care"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-md hover:shadow-goldGlow transition-all"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Book Hearing Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-navy-900 bg-white border border-ivory-border hover:bg-ivory-200 shadow-subtle transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>Call: {BRAND.phone}</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="pt-4 border-t border-ivory-border flex flex-wrap items-center gap-6 text-xs text-charcoal-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Diagnostic Audiometry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-navy-800 flex-shrink-0" />
                  <span>Paediatric &amp; Adult Evaluations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-gold-600 flex-shrink-0" />
                  <span>Tailored Hearing Aid Guidance</span>
                </div>
              </div>
            </div>

            {/* Right Photography (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card border-2 border-gold-300/70 bg-white">
                <div className="relative w-full h-[360px] sm:h-[460px]">
                  <Image
                    src="/images/hearing-care.jpg"
                    alt="Professional audiologist conducting diagnostic hearing assessment with headphones in clinical sound-treated setting"
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

                  {/* Story badge */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gold-300/80 shadow-md">
                    <p className="font-serif font-bold text-navy-950 text-sm">
                      {BRAND.name}
                    </p>
                    <p className="text-xs text-gold-800 font-medium mt-0.5">
                      Supporting Communication • Enhancing Abilities • Empowering Lives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SECTION 1: AUDIOMETRIC EVALUATION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
              Clinical Assessment
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-950">
              1. Audiometric Evaluation
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              Audiometric evaluation is the process of assessing an individual&apos;s hearing ability to identify the presence, type, and degree of hearing loss. It helps determine how well a person hears different sounds and speech, providing valuable information for further management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pure Tone Audiometry */}
            <div className="p-7 rounded-2xl bg-ivory-50 border border-ivory-border space-y-4 hover:border-gold-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-navy-950">
                Pure Tone Audiometry (PTA)
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Evaluates hearing sensitivity across different frequencies to determine the degree and pattern of hearing loss. Tests auditory responses to tones across pitches to map hearing thresholds accurately.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-navy-900">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>Threshold mapping across frequency spectrum</span>
              </div>
            </div>

            {/* Hearing Screening */}
            <div className="p-7 rounded-2xl bg-ivory-50 border border-ivory-border space-y-4 hover:border-gold-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-navy-950">
                Hearing Screening
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Helps identify individuals who may require a comprehensive hearing assessment. Ideal for early detection in infants, preschool children, school learners, and preventative screening for adults.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-navy-900">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>Rapid detection for children, students &amp; adults</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-navy-50/80 border border-navy-100 text-xs sm:text-sm text-navy-950 leading-relaxed">
            <strong className="text-navy-950 font-bold block mb-1">Diagnostic Recommendations:</strong>
            Based on the findings, appropriate recommendations may include further medical evaluation, hearing aid consultation, or referral for specialized audiological assessment.
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SECTION 2: HEARING AIDS — SELECTION, FITTING AND SUPPORT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-navy-800 shadow-cardHover relative overflow-hidden space-y-10">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Technology &amp; Rehabilitation
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              2. Hearing Aids — Selection, Fitting and Support
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hearing aids are electronic devices designed to amplify sound and improve access to speech and environmental sounds for individuals with hearing loss. The appropriate hearing aid depends on the person&apos;s hearing assessment results, communication needs, lifestyle, comfort, and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hearing Aid Consultation",
                desc: "Guidance on suitable hearing aid options based on hearing assessment results and individual communication needs.",
                icon: HelpCircle,
              },
              {
                title: "Hearing Aid Selection",
                desc: "Assistance in choosing appropriate devices, including suitable styles, digital signal features, and form factors.",
                icon: Sliders,
              },
              {
                title: "Fitting and Programming",
                desc: "Device fitting and computerized acoustic adjustment, where available, to match the individual's hearing profile.",
                icon: Settings,
              },
              {
                title: "Hearing Aid Orientation",
                desc: "Guidance on the correct use, care, daily handling, cleaning, battery management, and maintenance of hearing aids.",
                icon: CheckCircle2,
              },
              {
                title: "Follow-Up and Fine-Tuning",
                desc: "Ongoing support to address comfort, sound quality, loudness tolerance, and listening difficulties, subject to service availability.",
                icon: Sparkles,
              },
              {
                title: "Maintenance and Service",
                desc: "Assistance with routine care, performance checks, and servicing, where available.",
                icon: ShieldCheck,
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-navy-900/80 rounded-2xl border border-navy-800 p-6 space-y-3 hover:border-gold-400/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center text-gold-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SECTION 3: HEARING CARE THROUGHOUT LIFE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
              Lifelong Auditory Well-Being
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-950">
              3. Hearing Care
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-serif text-gold-900">
              Hearing care is important throughout life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-ivory-50 border border-ivory-border space-y-3">
              <div className="w-11 h-11 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-serif font-bold text-sm">
                01
              </div>
              <h3 className="font-serif font-bold text-lg text-navy-950">
                In Children
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                In children, hearing difficulties may affect speech and language development, learning, attention, classroom participation, and social interaction. Early identification is essential to building strong speech, language, and communication foundations.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-ivory-50 border border-ivory-border space-y-3">
              <div className="w-11 h-11 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-serif font-bold text-sm">
                02
              </div>
              <h3 className="font-serif font-bold text-lg text-navy-950">
                In Adults
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                In adults, hearing loss may affect conversations, family relationships, workplace participation, phone interactions, and independence. Timely care preserves connection, reduces listening strain, and promotes emotional well-being.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gold-50/70 border border-gold-200 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
            <p className="font-semibold text-gold-950 mb-1">
              Timely Evaluation Matters:
            </p>
            We encourage timely hearing evaluation whenever hearing difficulties are suspected. Early identification and appropriate management can help individuals access communication more effectively and improve participation in everyday activities.
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SECTION 4: OUR APPROACH TO HEARING CARE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
              Clinical Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-950">
              4. Our Approach to Hearing Care
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              We believe that effective hearing care involves more than identifying hearing loss. It also includes understanding each individual&apos;s communication needs, explaining assessment findings clearly, guiding families through available options, and recommending appropriate follow-up when necessary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Individualized hearing care and guidance.",
              "Clear explanation of assessment findings.",
              "Appropriate hearing aid recommendations.",
              "Family education and counselling.",
              "Referral to an ENT specialist or other appropriate professional when indicated.",
              "Seamless collaboration with speech and language therapy when required.",
            ].map((point, idx) => (
              <div
                key={point}
                className="p-5 rounded-2xl bg-ivory-50 border border-ivory-border flex items-start gap-3 hover:border-gold-300 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-navy-950 leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CALL TO ACTION & CONTACT DETAILS
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
            Take The Next Step
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-950">
            Take the First Step Towards Better Hearing
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
            If you experience difficulty hearing, understanding speech, or responding consistently to sounds, a hearing evaluation may be helpful.
          </p>
        </div>

        <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 max-w-xl mx-auto space-y-4 shadow-card">
          <p className="font-serif font-bold text-base text-gold-400">
            {BRAND.name}
          </p>
          <p className="text-xs text-slate-300 italic">
            &ldquo;Supporting Communication. Enhancing Abilities. Empowering Lives.&rdquo;
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/appointments?service=Hearing%20Care"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Hearing Evaluation</span>
            </Link>
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-semibold text-xs transition-colors border border-navy-700"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{BRAND.phone}</span>
            </a>
          </div>
        </div>

        <div className="text-xs text-charcoal-500 pt-2 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold-600" />
            <span>{BRAND.shortAddress}</span>
          </span>
          <span>&bull;</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-600" />
            <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
          </span>
        </div>
      </section>
    </div>
  );
}
