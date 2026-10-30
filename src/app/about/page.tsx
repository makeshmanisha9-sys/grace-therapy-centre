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
  Info,
  Clock,
  Sparkles,
  Award,
  Target,
  Compass,
  Building,
} from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";

export const metadata = {
  title: "About Us | Multidisciplinary Care Philosophy & Clinical Foundation",
  description:
    "Learn about GRACE Multi-Therapy & Hearing Care Centre. Built on a clinical foundation of over 25 years in Speech-Language Pathology and Paediatric Rehabilitation in Sholinganallur, Chennai.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
            About Our Centre
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950 leading-tight">
            {BRAND.headline}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-serif text-gold-900">
            {BRAND.tagline}
          </p>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            Supporting individuals to grow, learn, communicate, and lead more independent and fulfilling lives. Welcoming children, families, and adults seeking specialized developmental therapy and hearing care in Sholinganallur, Chennai.
          </p>
        </div>
      </section>

      {/* Mission & Vision Twin Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                Compassionate, Evidence-Based Multidisciplinary Care
              </h2>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                {BRAND.mission}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-ivory-border flex items-center gap-2 text-xs font-semibold text-navy-900">
              <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>Nurturing potential across every developmental stage</span>
            </div>
          </div>

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
                Better Communication • Brighter Future
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {BRAND.vision}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-navy-800 flex items-center gap-2 text-xs font-semibold text-gold-300">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Lifelong family partnership &amp; collaborative expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Foundation: 25+ Years Story & Scope */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-xs font-bold">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Clinical Foundation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
                Over 25 Years of Clinical Foundation in Speech-Language Pathology &amp; Paediatric Rehabilitation
              </h2>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                The clinical foundation of GRACE is anchored in more than two and a half decades of dedicated practice in Speech-Language Pathology and Paediatric Rehabilitation. This deep clinical heritage guides our diagnostic judgment, family counseling, individualized goal setting, and multidisciplinary coordination.
              </p>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-ivory-border space-y-2">
                <h3 className="font-serif font-bold text-sm text-navy-950 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span>Comprehensive Scope: Child Development &amp; Adult Rehabilitation</span>
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  While early childhood intervention is a core pillar of our work, our clinical scope extends seamlessly to school-aged children, adolescents, and adults. From post-stroke speech recovery, aphasia, and dysarthria to cognitive retraining, adult hearing rehabilitation, and parent coaching, we support individuals across every phase of life.
                </p>
              </div>

              {/* Core Supporting Words */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {BRAND.supportingWords.map((word) => (
                  <div key={word} className="bg-navy-50/80 p-3.5 rounded-xl border border-navy-100 text-center">
                    <span className="block text-xs font-bold text-navy-950 tracking-wider">{word}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photography (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-ivory-border shadow-subtle h-80 sm:h-96 bg-slate-100">
                <Image
                  src="/images/about-multidisciplinary.jpg"
                  alt="Multidisciplinary clinical consultation area at GRACE Centre"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-ivory-border text-xs text-navy-950 font-medium">
                  <span className="block font-bold text-navy-950">{BRAND.name}</span>
                  <span className="text-charcoal-600 block text-[11px] mt-0.5">{BRAND.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Every clinical session, evaluation, and family conversation at GRACE is governed by these principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-ivory-border p-7 shadow-card space-y-3">
            <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900">
              <Heart className="w-5 h-5 text-gold-600" />
            </div>
            <h3 className="font-serif font-bold text-xl text-navy-950">Family-Centred Care</h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Parents and caregivers are essential partners in therapy. We empower families with practical home strategies, milestone tracking, and transparent progress reviews.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-ivory-border p-7 shadow-card space-y-3">
            <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="font-serif font-bold text-xl text-navy-950">Evidence-Based Practice</h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              We apply validated clinical protocols across speech pathology, sensory integration, behavioural support, physiotherapy, psychological counselling, and audiology.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-ivory-border p-7 shadow-card space-y-3">
            <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900">
              <Users className="w-5 h-5 text-navy-800" />
            </div>
            <h3 className="font-serif font-bold text-xl text-navy-950">Multidisciplinary Synergy</h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Our clinicians collaborate across disciplines so that speech, sensory, occupational, educational, and cognitive strategies reinforce each other smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Clinical Disciplines Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-50 rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
              Clinical Team &amp; Faculty
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              Our Clinical Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              In accordance with our strict verification policy, we do not invent staff names or clinical claims. The profiles below represent our clinical departments and will be updated with individual clinician bios as verified during onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.slug}
                className="bg-white rounded-2xl border border-ivory-border overflow-hidden shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-36 bg-slate-100">
                    <Image
                      src={srv.imageUrl}
                      alt={srv.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white bg-navy-900/80 px-2 py-0.5 rounded">
                      Discipline {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif font-bold text-base text-navy-950">{srv.name}</h3>
                    <p className="text-xs text-charcoal-700 leading-relaxed line-clamp-2">{srv.shortDescription}</p>
                  </div>
                </div>
                <div className="p-4 pt-0 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-gold-900 font-medium bg-gold-50 p-2 rounded-lg border border-gold-200">
                    <Info className="w-3.5 h-3.5 flex-shrink-0 text-gold-700" />
                    <span className="truncate">Staff Profile Pending Verification — {srv.name}</span>
                  </div>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-[11px] font-bold text-navy-900 hover:text-gold-700 inline-flex items-center gap-1 pt-1"
                  >
                    <span>View Clinical Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Credentials & Referral Slip Document Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-navy-900 uppercase tracking-wider">
              <Building className="w-4 h-4 text-gold-600" />
              <span>Medical &amp; Clinical Referrals</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-navy-950">
              Doctor &amp; Paediatrician Referral Network
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              We collaborate with ENT specialists, paediatricians, neurologists, and educators across Chennai. In formal medical documentation and doctor referral slips, our centre is formally referenced as <strong className="text-navy-900">GRACE MULTI-THERAPY CENTER &amp; HEARING CARE</strong>.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-navy-50 hover:bg-navy-100 text-navy-900 border border-navy-200 font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-colors"
          >
            Referral Information
          </Link>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
          Partner With Our Multidisciplinary Team
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto">
          Contact our clinical coordinator today to schedule an initial consultation, audiometric screening, or visit our centre in Sholinganallur.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/appointments"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-navy-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-navy-800 shadow-md transition-all"
          >
            Request Appointment
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 text-charcoal-800 font-semibold text-xs hover:bg-white transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}