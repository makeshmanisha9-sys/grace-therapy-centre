"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function QuickContactBar() {
  return (
    <aside
      aria-label="Quick Contact Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-warm-border shadow-lg px-3 py-2"
    >
      <div className="grid grid-cols-3 gap-2 text-center">
        <a
          href={`tel:${BRAND.phoneClean}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-navy-50 text-navy-900 border border-navy-200 active:bg-navy-100 transition-colors"
          aria-label="Call GRACE Therapy Centre directly"
        >
          <Phone className="w-4 h-4 text-navy-800" />
          <span className="text-[11px] font-semibold mt-0.5">Call Us</span>
        </a>

        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 active:bg-emerald-100 transition-colors"
          aria-label="Send a message on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-700" />
          <span className="text-[11px] font-semibold mt-0.5">WhatsApp</span>
        </a>

        <Link
          href="/appointments"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-gold-600 text-navy-950 font-bold active:bg-gold-500 shadow-sm transition-colors"
        >
          <Calendar className="w-4 h-4 text-navy-950" />
          <span className="text-[11px] font-bold mt-0.5">Book Now</span>
        </Link>
      </div>
    </aside>
  );
}
