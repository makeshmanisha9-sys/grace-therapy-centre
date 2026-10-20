import React from "react";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function MapEmbed() {
  const encodedAddress = encodeURIComponent(BRAND.address);
  const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white rounded-3xl border border-ivory-border p-5 sm:p-7 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-800">
            <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-navy-950 text-base">
              Centre Location Map
            </h4>
            <p className="text-xs text-charcoal-600">
              Sholinganallur, Chennai (Off OMR &amp; Village High Road)
            </p>
          </div>
        </div>

        <a
          href={BRAND.mapsQueryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-800 transition-colors shadow-sm self-start sm:self-auto"
        >
          <Navigation className="w-3.5 h-3.5 text-gold-400" />
          <span>Get Live Directions</span>
          <ExternalLink className="w-3 h-3 text-slate-300 ml-0.5" />
        </a>
      </div>

      {/* Embedded Map */}
      <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
        <iframe
          title="GRACE Multidisciplinary Therapy Centre Location Map"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      <div className="mt-4 pt-3.5 border-t border-ivory-border flex flex-wrap items-center justify-between text-xs text-charcoal-600 gap-2">
        <p className="font-semibold text-navy-950">
          {BRAND.address}
        </p>
        <span className="text-slate-500 font-medium">
          Landmark: Sai Garden, Villa A, Village High Road
        </span>
      </div>
    </div>
  );
}
