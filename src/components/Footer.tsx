import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Heart,
  ChevronRight,
  MessageSquare,
  Award,
} from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-navy-950 via-[#0A1E35] to-navy-950 text-slate-300 pt-16 pb-12 border-t border-gold-400/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          {/* Column 1: Brand Info & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 bg-white rounded-full p-1 border border-gold-300/80 shadow-subtle flex-shrink-0">
                <Image
                  src="/images/grace-logo.jpg"
                  alt="GRACE Multi-Therapy Centre and Hearing Care Logo"
                  fill
                  sizes="56px"
                  className="object-contain rounded-full p-0.5"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white tracking-tight leading-none">
                  GRACE
                </h3>
                <p className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider mt-1">
                  Multi-Therapy &amp; Hearing Care
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              {BRAND.brandStatement}
            </p>

            <div className="pt-1 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900/80 border border-gold-500/30 text-xs text-gold-300 font-medium">
                <Award className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>Over 25 Years of Clinical Foundation</span>
              </div>
              <p className="text-xs text-slate-400 font-medium tracking-wide">
                {BRAND.tagline} &bull; {BRAND.motto}
              </p>
            </div>

            {/* Quick Contact Icons */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-2 font-medium">
                Contact &amp; Messaging:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 hover:border-gold-400 flex items-center justify-center text-slate-200 hover:text-gold-300 transition-colors"
                  aria-label="WhatsApp Chat with GRACE Therapy Centre"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 hover:border-gold-400 flex items-center justify-center text-slate-200 hover:text-gold-300 transition-colors"
                  aria-label="Email GRACE Therapy Centre"
                >
                  <Mail className="w-4 h-4 text-gold-400" />
                </a>
                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 hover:border-gold-400 flex items-center justify-center text-slate-200 hover:text-gold-300 transition-colors"
                  aria-label="Call GRACE Therapy Centre"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Clinical Disciplines & Programmes (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 border-b border-navy-800/80 pb-2">
              Clinical Disciplines &amp; Programmes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {SERVICES.map((srv) => (
                <Link
                  key={srv.slug}
                  href={`/services/${srv.slug}`}
                  className="group flex items-start gap-1.5 text-xs text-slate-300 hover:text-gold-300 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="font-medium text-slate-200 group-hover:text-gold-300 truncate">
                    {srv.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/services"
                className="text-[11px] font-bold text-gold-400 hover:text-gold-300 inline-flex items-center gap-1"
              >
                <span>View Full Comparison &amp; Clinical Methodologies</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Column 3: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 border-b border-navy-800/80 pb-2">
              Clinic Location &amp; Hours
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-medium leading-snug">
                    {BRAND.address}
                  </p>
                  <a
                    href={BRAND.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 underline mt-1 font-semibold"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${BRAND.phoneClean}`}
                    className="text-slate-200 font-bold hover:text-gold-400 transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                  <span className="block text-[11px] text-slate-400">Consultation Helpline</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-slate-300 hover:text-gold-400 transition-colors break-all text-xs"
                >
                  {BRAND.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 space-y-0.5">
                  <p className="font-semibold text-slate-200">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  <p className="text-slate-400">Sunday: By prior appointment only</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/appointments"
                className="inline-block w-full text-center py-2.5 px-4 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Request Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy &amp; Terms
            </Link>
            <Link href="/faq" className="hover:text-gold-400 transition-colors">
              FAQ
            </Link>
            <Link href="/teletherapy" className="hover:text-gold-400 transition-colors">
              Teletherapy
            </Link>
            <Link href="/admin/login" className="hover:text-gold-400 transition-colors">
              Staff Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}