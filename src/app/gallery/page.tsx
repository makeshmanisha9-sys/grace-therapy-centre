import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Calendar, Info, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Centre Facilities & Gallery | Verified Visuals",
  description:
    "View the visual identity, modern clinic practice zones, and dedicated therapy environments of GRACE Multidisciplinary Therapy Centre in Sholinganallur, Chennai.",
};

export default function GalleryPage() {
  const facilityAreas = [
    {
      title: "Speech & Language Assessment Cabin",
      purpose: "Quiet, distraction-free environment for articulation, receptive language, and fluency testing.",
      spec: "Acoustically dampened • Interactive visual tools • Digital AAC devices",
      image: "/images/speech-therapy.jpg",
      status: "Representative Clinical Practice Environment",
    },
    {
      title: "Sensory Integration & Occupational Gym",
      purpose: "Equipped for vestibular balance, climbing, motor planning, and fine motor dexterity.",
      spec: "Safety-matted flooring • Suspended apparatus • Sensory tactile stations",
      image: "/images/occupational-therapy.jpg",
      status: "Representative Clinical Practice Environment",
    },
    {
      title: "Audiometric Testing & Fitting Suite",
      purpose: "Calibrated diagnostic room for Pure Tone Audiometry (PTA) and digital hearing aid fitting.",
      spec: "Certified sound suppression • Computerized acoustic fitting • Real-ear verification",
      image: "/images/hearing-care.jpg",
      status: "Representative Clinical Practice Environment",
    },
    {
      title: "Paediatric Physiotherapy & Motor Studio",
      purpose: "Rehabilitation space for gross motor milestones, posture correction, and gait rehabilitation.",
      spec: "Parallel gait bars • Therapeutic balance balls • Developmental mats",
      image: "/images/physiotherapy.jpg",
      status: "Representative Clinical Practice Environment",
    },
    {
      title: "Special Education & Cognitive Learning Station",
      purpose: "Structured multisensory space for dyslexia remediation and individualized IEP instruction.",
      spec: "Multisensory manipulatives • Tactile phonics tools • Ergonomic seating",
      image: "/images/special-education.jpg",
      status: "Representative Clinical Practice Environment",
    },
    {
      title: "Family Counseling & Consultation Room",
      purpose: "Comfortable, private lounge for parent debriefs, milestone reviews, and teletherapy sessions.",
      spec: "Private confidential seating • Progress review displays • Telehealth terminal",
      image: "/images/about-multidisciplinary.jpg",
      status: "Representative Clinical Practice Environment",
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
          Our Facilities &amp; Identity
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950">
          Centre Facilities &amp; Visuals
        </h1>
        <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
          Explore the clinical environments and visual identity of GRACE Multidisciplinary Therapy Centre. In accordance with healthcare integrity, our imagery is curated to accurately represent our clinical disciplines and practice zones.
        </p>
      </div>

      {/* Official Verified Brand Identity */}
      <section className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded">
              Verified Brand Emblem
            </span>
            <h2 className="font-serif font-bold text-2xl text-navy-950">
              Official Centre Logo &amp; Identity
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Supplied high-resolution brand emblem preserving the original colors, typography, and symbolic motifs of family support and auditory sound waves.
            </p>
            <div className="flex items-center gap-2 text-xs text-charcoal-600">
              <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>Verified asset provided directly by GRACE Centre</span>
            </div>
          </div>

          <div className="relative w-full h-64 bg-ivory-50 rounded-2xl border border-ivory-border p-6 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/grace-logo.jpg"
              alt="Official GRACE Multidisciplinary Therapy Centre Logo"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </section>

      {/* Modern Clinical Architecture & Zones */}
      <section className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-serif font-bold text-2xl text-navy-950">
              Clinical Therapy Zones &amp; Environments
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Structured for child comfort, safety, sensory regulation, and focused therapy.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-navy-900 bg-navy-50 border border-navy-200 px-3 py-1.5 rounded-lg">
            <Info className="w-4 h-4 text-gold-600 flex-shrink-0" />
            <span>Honest representation: Curated clinical imagery depicting representative therapy practices</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityAreas.map((zone, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-ivory-border overflow-hidden shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src={zone.image}
                    alt={zone.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-navy-900/80 px-2 py-0.5 rounded">
                    Zone 0{idx + 1}
                  </span>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="font-serif font-bold text-base text-navy-950">
                    {zone.title}
                  </h3>
                  <p className="text-xs text-charcoal-700 leading-relaxed">
                    {zone.purpose}
                  </p>
                  <div className="text-[11px] text-gold-900 bg-gold-50/80 p-2.5 rounded-lg border border-gold-200 font-medium">
                    {zone.spec}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs">
                <span className="text-charcoal-500 italic text-[11px]">{zone.status}</span>
                <Link
                  href="/appointments"
                  className="font-bold text-navy-900 hover:text-gold-700 flex items-center gap-1"
                >
                  <span>Book Visit</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Visit Schedule CTA */}
      <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-navy-800">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
          Experience Our Centre in Person
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          We invite parents and caregivers to visit Door #174, Sai Garden, Villa A on Village High Road in Sholinganallur for an in-person walkthrough and developmental discussion.
        </p>
        <div className="pt-2">
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule a Visit</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
