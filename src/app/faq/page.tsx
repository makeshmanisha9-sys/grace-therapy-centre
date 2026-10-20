"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQ_DATA, FaqItem } from "@/components/FaqAccordion";
import FaqAccordion from "@/components/FaqAccordion";
import { HelpCircle, Search, Phone, Calendar, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "General", "Services", "Appointments", "Teletherapy", "Location"];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
          Knowledge Base &amp; Family Guidance
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
          Have questions about clinical sessions, hearing assessments, teletherapy, or clinic preparation? Explore our verified answers below.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-ivory-border p-6 sm:p-7 shadow-subtle space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. speech therapy, hearing aids, location, timings)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-warm-border text-sm text-charcoal-900 bg-warm-white/40 focus:bg-white focus:outline-none focus:border-gold-600 focus:ring-2 focus:ring-gold-500/20 transition-all"
          />
          <Search className="w-5 h-5 text-charcoal-400 absolute left-3.5 top-3.5 pointer-events-none" />
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-navy-900 text-white shadow-sm ring-1 ring-gold-400/40"
                  : "bg-warm-white/80 text-charcoal-700 hover:bg-warm-cream border border-warm-border hover:border-gold-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Component */}
      <div className="pt-2">
        {filteredFaqs.length > 0 ? (
          <FaqAccordion items={filteredFaqs} />
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-ivory-border p-8 shadow-subtle">
            <HelpCircle className="w-10 h-10 text-charcoal-400 mx-auto mb-2" />
            <h3 className="font-serif font-bold text-lg text-navy-950">
              No matching questions found
            </h3>
            <p className="text-xs text-charcoal-600 mt-1">
              Try adjusting your search terms or contact our clinic directly at {BRAND.phone}.
            </p>
          </div>
        )}
      </div>

      {/* Help Banner */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gold-500/20 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300">
            Dedicated Care Coordinators
          </span>
          <h3 className="font-serif font-bold text-2xl text-white">
            Have a question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Our clinical desk will be glad to explain developmental protocols, evaluation schedules, and appointment openings.
          </p>
        </div>
        <div className="flex items-center gap-3.5 flex-shrink-0">
          <a
            href={`tel:${BRAND.phoneClean}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-400/80 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
          >
            <span>Book Visit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
