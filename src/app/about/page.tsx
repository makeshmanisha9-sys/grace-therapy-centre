import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Users,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Sparkles,
  Award,
  Target,
  Compass,
  Activity,
  Smile,
  ClipboardCheck,
} from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: `About Us | ${BRAND.name}`,
  description:
    "Learn about Grace Multi-Therapy & Hearing Care Centre in Sholinganallur, Chennai. Built on a clinical foundation of over 25 years of professional experience in Speech-Language Pathology and Paediatric Rehabilitation.",
};

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* =========================================================================
          1. HEADER BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
            About Us
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-navy-950 leading-snug">
            {BRAND.headline}
          </h1>
          <p className="text-base sm:text-lg font-medium text-gold-800 font-serif">
            {BRAND.tagline}
          </p>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            {BRAND.brandStatement}
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT US OVERVIEW & CLINICAL FOUNDATION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-xs font-bold">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Over 25 Years of Clinical Experience</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
                A Clinical Foundation Built on Deep Understanding &amp; Family Involvement
              </h2>

              <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
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

              {/* Core Supporting Pillars */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {BRAND.supportingWords.map((word) => (
                  <div key={word} className="bg-navy-50/80 p-3 rounded-xl border border-navy-100 text-center">
                    <span className="block text-xs font-bold text-navy-950 tracking-wider">{word}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photography (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-300/60 shadow-card h-80 sm:h-[420px] bg-slate-100">
                <Image
                  src="/images/about-multidisciplinary.jpg"
                  alt={`Multidisciplinary therapy session at ${BRAND.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md p-3.5 rounded-xl border border-gold-400/40 text-white text-xs">
                  <span className="block font-bold text-gold-300">{BRAND.name}</span>
                  <span className="text-slate-300 block text-[11px] mt-0.5">{BRAND.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR VISION & OUR MISSION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-navy-950 text-white rounded-3xl border border-navy-800 p-8 sm:p-10 shadow-cardHover relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 border border-navy-700 flex items-center justify-center text-gold-400">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">
                Our Vision
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">
                Empowered to Communicate, Develop, and Thrive
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                &ldquo;{BRAND.vision}&rdquo;
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-navy-800 flex items-center gap-2 text-xs font-semibold text-gold-300">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Dignity, confidence, and independence for every age</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-10 shadow-card relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100/40 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block">
                Our Mission
              </span>
              <h2 className="text-2xl font-serif font-bold text-navy-950">
                Compassionate, Individualized &amp; Evidence-Based Care
              </h2>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                &ldquo;{BRAND.mission}&rdquo;
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-ivory-border flex items-center gap-2 text-xs font-semibold text-navy-900">
              <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>Collaborative care, family empowerment &amp; lifelong development</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR APPROACH TO CARE (CLIENT-PROVIDED TEXT)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
              Clinical Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              Our Approach to Care
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Recognizing uniqueness, fostering multidisciplinary collaboration, and connecting therapy to real-life needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-serif font-bold text-base text-navy-950">
                Individualized Programmes
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                We recognize that every individual is unique. Our approach focuses on understanding each person&apos;s strengths, challenges, and goals and developing individualized therapeutic programmes that address their specific needs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-serif font-bold text-base text-navy-950">
                Multidisciplinary Support
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Through our multidisciplinary services, we aim to support communication, development, learning, behaviour, movement, hearing, and functional independence under one coordinated clinical roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-serif font-bold text-base text-navy-950">
                Collaborative Partnership
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                We believe that meaningful progress happens when professionals work collaboratively, families are actively involved, and therapy is connected to real-life needs and everyday home routines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-serif font-bold text-base text-navy-950">
                Group Therapy Programmes
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Our services extend beyond individual therapy to include group therapy programmes that encourage social interaction, peer communication, cooperative play, and functional learning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold text-sm">
                05
              </div>
              <h3 className="font-serif font-bold text-base text-navy-950">
                Parent Workshops &amp; Training
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                We conduct parent workshops that equip families with practical knowledge and actionable strategies to support speech, behaviour, and development confidently in home routines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold text-sm">
                06
              </div>
              <h3 className="font-serif font-bold text-base text-navy-950">
                Adult Rehabilitation Services
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                We also provide rehabilitation services for adults experiencing communication and functional difficulties associated with stroke, neurological conditions, and other health-related challenges, helping them work towards improved communication, participation, and independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR COMMITMENT (CLIENT-PROVIDED TEXT)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-gold-400/30 shadow-cardHover relative overflow-hidden space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-navy-800/80 px-3.5 py-1 rounded-full border border-gold-400/30">
              Our Promise
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Our Commitment
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              At Grace, we are committed to providing individualized, ethical, and evidence-informed care in a respectful, encouraging, and supportive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-2.5">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-sm">
                <Heart className="w-4 h-4 flex-shrink-0" />
                <span>Every Milestone Matters</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We value every achievement, recognize every individual&apos;s strengths, and understand that progress looks different for each person. Whether it is a child taking the first steps towards communication, a student developing greater independence, or an adult working towards regaining functional abilities, we believe every milestone matters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 space-y-2.5">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-sm">
                <Users className="w-4 h-4 flex-shrink-0" />
                <span>Active Family &amp; Professional Partnership</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We work in partnership with families, caregivers, and other professionals to make therapy meaningful, practical, and relevant to everyday life.
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <p className="text-sm font-serif font-bold text-gold-300 italic">
              &ldquo;{BRAND.brandStatement}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FOUR-STEP THERAPY PROCESS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
            Care Pathway
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Our Four-Step Therapy Process
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Transparent, milestone-focused progression tailored to individual strengths and family needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              icon: ClipboardCheck,
              title: "Assessment",
              desc: "Comprehensive evaluation of strengths, developmental needs, and goals.",
            },
            {
              step: "02",
              icon: Target,
              title: "Goal Setting",
              desc: "Collaborative, measurable individualized therapeutic milestones.",
            },
            {
              step: "03",
              icon: Activity,
              title: "Therapy",
              desc: "Engaging, evidence-informed multidisciplinary clinical sessions.",
            },
            {
              step: "04",
              icon: Smile,
              title: "Progress Review",
              desc: "Regular reassessments, transparent tracking, and home guidance.",
            },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-ivory-border p-6 shadow-subtle hover:shadow-card hover:border-gold-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-gold-700">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center">
                      <IconComp className="w-4 h-4 text-gold-600" />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-base text-navy-950">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          7. CTA SECTION
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
          Begin Your Journey with {BRAND.name}
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto">
          Reach out to our clinical desk in Sholinganallur, Chennai to schedule an initial consultation or developmental screening.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/appointments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-navy-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-navy-800 shadow-md transition-all"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Book an Appointment</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 text-charcoal-800 font-semibold text-xs hover:bg-white transition-colors"
          >
            <span>Contact Centre</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
