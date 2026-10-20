"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Services" | "Appointments" | "Teletherapy" | "Location";
}

export const FAQ_DATA: FaqItem[] = [
  {
    category: "General",
    question: "What is a multidisciplinary therapy centre?",
    answer:
      "A multidisciplinary therapy centre brings diverse clinical specialties—including Speech Therapy, Occupational Therapy, Behavioural Therapy, Special Education, Physiotherapy, and Audiology—under one collaborative roof. This ensures integrated, coordinated care where therapists communicate closely about each individual's developmental goals.",
  },
  {
    category: "Appointments",
    question: "How do I book an appointment, and is my submission confirmed immediately?",
    answer:
      "Submitting our online form sends an appointment request to our clinical coordination team. Because comprehensive therapy and hearing assessments require specific therapist allocation, our team will review the schedule and contact you directly via phone or WhatsApp to confirm your exact appointment date and time.",
  },
  {
    category: "Appointments",
    question: "What should we bring or prepare for the first evaluation visit?",
    answer:
      "For initial developmental evaluations or hearing tests, please bring any previous assessment reports, paediatrician referral notes, school feedback, or hearing test records if available. Ensure your child is well-rested and comfortable. We recommend arriving 10-15 minutes early to complete initial registration.",
  },
  {
    category: "Services",
    question: "How do I know which therapy my child needs?",
    answer:
      "If you notice delays in speech milestones, difficulty with sensory balance, challenges in school readiness, or behavioural distress, you can book an initial multidisciplinary developmental screening. Our clinical team evaluates the child holistically and recommends whether Speech, Occupational, Behavioural, or Educational therapy is the best starting path.",
  },
  {
    category: "Services",
    question: "Do you offer hearing aid trials for children and adults?",
    answer:
      "Yes. Our hearing care facility offers diagnostic audiometric evaluations, hearing aid trials, personalized acoustic programming, and follow-up care. We work with leading digital hearing aid technologies including behind-the-ear (BTE), receiver-in-canal (RIC), and custom in-the-canal models.",
  },
  {
    category: "Teletherapy",
    question: "How does Teletherapy work, and is it as effective as in-person sessions?",
    answer:
      "Teletherapy delivers live, therapist-guided video sessions into your home. It is particularly effective for speech therapy, parent coaching, and behavioural support. Session effectiveness depends on the child's developmental profile, age, and family readiness. Our team conducts a pre-consultation assessment to confirm whether teletherapy is suitable for your specific therapy goals.",
  },
  {
    category: "Location",
    question: "Where is GRACE Multidisciplinary Therapy Centre located in Chennai?",
    answer:
      "Our centre is located at Door #174, Sai Garden, Villa A, Village High Road, Sholinganallur, Chennai, Tamil Nadu 600119. We are conveniently accessible from OMR (Old Mahabalipuram Road) and ECR. Parking and ground-level accessibility are available.",
  },
  {
    category: "General",
    question: "Do you make clinical guarantees or promise specific timelines for progress?",
    answer:
      "In accordance with ethical clinical practice, developmental progress varies significantly between individuals. We do not make guaranteed outcome claims. Instead, our therapists set clear, individualized milestones, conduct regular objective re-evaluations, and partner closely with parents for consistent growth.",
  },
];

export default function FaqAccordion({ items = FAQ_DATA }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const questionId = `faq-q-${idx}`;
        const answerId = `faq-a-${idx}`;

        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-gold-300/80 bg-white shadow-subtle ring-1 ring-gold-200/50"
                : "border-warm-border/80 bg-white/70 hover:bg-white hover:border-gold-200"
            }`}
          >
            <button
              type="button"
              id={questionId}
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none focus:ring-2 focus:ring-gold-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  isOpen ? "bg-gold-50 text-gold-700 border border-gold-200" : "bg-navy-50 text-navy-800 border border-navy-100"
                }`}>
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="font-serif font-bold text-base sm:text-lg text-navy-950">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gold-600 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-gold-700" : "text-charcoal-400"
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className="px-5 pb-5 pt-1 text-sm text-charcoal-700 leading-relaxed border-t border-warm-border/60 animate-in fade-in duration-150"
              >
                <div className="pl-11">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
