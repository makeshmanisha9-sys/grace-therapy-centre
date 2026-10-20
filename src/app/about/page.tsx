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
} from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "About Us | Multidisciplinary Care Philosophy",
  description:
    "Learn about GRACE Multidisciplinary Therapy Centre and Hearing Care. Our mission, values, multidisciplinary clinical team approach, and family-centred care in Sholinganallur, Chennai.",
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
            Nurturing Potential Through Unified Multidisciplinary Care
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            GRACE Multidisciplinary Therapy Centre and Hearing Care was founded with a singular conviction: every child, adolescent, and individual deserves dedicated support to communicate, learn, and thrive.
          </p>
        </div>
      </section>

      {/* Editorial Story & Clinical Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
                Our Vision &amp; Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
                Better Communication • Brighter Future
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Development is not linear, and neither are the challenges that children and individuals encounter. From early speech milestones and sensory processing to gross motor mobility and auditory clarity, early intervention with a coordinated multidisciplinary team makes a transformative difference.
              </p>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                At our modern facility on Village High Road in Sholinganallur, Chennai, we bring speech-language pathologists, occupational therapists, behavioural therapists, special educators, physiotherapists, and audiologists together to provide integrated, child-friendly care.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-ivory-50 p-3.5 rounded-xl border border-ivory-border text-center">
                  <span className="block text-xs font-bold text-navy-950 tracking-wider">SUPPORT</span>
                  <span className="text-[11px] text-charcoal-600">Empathetic foundation</span>
                </div>
                <div className="bg-ivory-50 p-3.5 rounded-xl border border-ivory-border text-center">
                  <span className="block text-xs font-bold text-navy-950 tracking-wider">DEVELOP</span>
                  <span className="text-[11px] text-charcoal-600">Skill progression</span>
                </div>
                <div className="bg-ivory-50 p-3.5 rounded-xl border border-ivory-border text-center">
                  <span className="block text-xs font-bold text-navy-950 tracking-wider">EMPOWER</span>
                  <span className="text-[11px] text-charcoal-600">Lifelong confidence</span>
                </div>
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
                  Door #174, Sai Garden, Villa A, Sholinganallur, Chennai
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
            Every clinical session and family conversation at GRACE is governed by these core values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-ivory-border p-7 shadow-card space-y-3">
            <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900">
              <Heart className="w-5 h-5 text-gold-600" />
            </div>
            <h3 className="font-serif font-bold text-xl text-navy-950">Family-Centred Care</h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Parents and guardians are essential co-partners in therapy. We empower families with practical home strategies, open discussions, and transparent progress metrics.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-ivory-border p-7 shadow-card space-y-3">
            <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="font-serif font-bold text-xl text-navy-950">Evidence-Based Practice</h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              We apply scientifically validated clinical protocols across speech pathology, sensory integration, behavioural support, physiotherapy, and audiology.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-ivory-border p-7 shadow-card space-y-3">
            <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900">
              <Users className="w-5 h-5 text-navy-800" />
            </div>
            <h3 className="font-serif font-bold text-xl text-navy-950">Multidisciplinary Collaboration</h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Our therapists discuss and align goals across disciplines, ensuring speech, occupational, educational, and sensory strategies reinforce each other smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Disciplines Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-50 rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
              Clinical Team &amp; Faculty
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              Meet Our Clinical Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              In accordance with our strict verification policy, we do not invent staff names or fake qualifications. The profiles below represent our clinical departments and will be updated with individual bios during client onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: "Speech-Language Pathology Department",
                focus: "Speech Articulation, Receptive & Expressive Language, Stammering, Voice, AAC",
                image: "/images/speech-therapy.jpg",
                status: "[Staff Profile Pending Verification — Speech Therapist]",
              },
              {
                role: "Occupational Therapy Department",
                focus: "Sensory Integration, Fine Motor Coordination, Hand Function, Daily Living Skills",
                image: "/images/occupational-therapy.jpg",
                status: "[Staff Profile Pending Verification — Occupational Therapist]",
              },
              {
                role: "Behavioural Support & Psychology",
                focus: "Positive Behaviour Support, Social Thinking, Emotion Regulation, FBA",
                image: "/images/behavioural-therapy.jpg",
                status: "[Staff Profile Pending Verification — Behavioural Therapist]",
              },
              {
                role: "Special Education Department",
                focus: "Individualised Educational Plans (IEP), Phonics, Dyslexia Remediation, School Readiness",
                image: "/images/special-education.jpg",
                status: "[Staff Profile Pending Verification — Special Educator]",
              },
              {
                role: "Paediatric Physiotherapy",
                focus: "Gross Motor Milestones, Core Strength, Posture, Gait Training, Balance",
                image: "/images/physiotherapy.jpg",
                status: "[Staff Profile Pending Verification — Paediatric Physiotherapist]",
              },
              {
                role: "Audiology & Hearing Care",
                focus: "Audiometric Testing, Tympanometry, Digital Hearing Aid Selection, Custom Fitting",
                image: "/images/hearing-care.jpg",
                status: "[Staff Profile Pending Verification — Audiologist & Speech Pathologist]",
              },
            ].map((dept, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-ivory-border overflow-hidden shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-36 bg-slate-100">
                    <Image
                      src={dept.image}
                      alt={dept.role}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white bg-navy-900/80 px-2 py-0.5 rounded">
                      Discipline 0{idx + 1}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif font-bold text-base text-navy-950">{dept.role}</h3>
                    <p className="text-xs text-charcoal-700 leading-relaxed">{dept.focus}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <div className="flex items-center gap-1.5 text-[11px] text-gold-900 font-medium bg-gold-50 p-2 rounded-lg border border-gold-200">
                    <Info className="w-3.5 h-3.5 flex-shrink-0 text-gold-700" />
                    <span className="truncate">{dept.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
          Partner With Our Multidisciplinary Team
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto">
          Contact our clinical coordinator today to schedule an initial screening or visit our centre in Sholinganallur.
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
            Contact Centre
          </Link>
        </div>
      </section>
    </div>
  );
}
