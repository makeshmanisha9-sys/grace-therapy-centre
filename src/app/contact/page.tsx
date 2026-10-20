import React from "react";
import { BRAND } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ExternalLink,
  Navigation,
} from "lucide-react";

export const metadata = {
  title: "Contact Us & Clinic Directions | Sholinganallur, Chennai",
  description:
    "Get in touch with GRACE Multidisciplinary Therapy Centre and Hearing Care. Located at Door #174, Sai Garden, Villa A, Village High Road, Sholinganallur, Chennai 600119. Phone: +91 8220007614.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950">
          Contact Our Care Centre
        </h1>
        <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
          We welcome families, paediatricians, and individuals seeking therapy and hearing evaluations. Contact our clinical desk directly or send us an enquiry below.
        </p>
      </div>

      {/* Main Grid: Contact Details & Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Contact Information (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Clinic Card */}
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 shadow-card border border-navy-800 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Direct Contact Information
            </span>
            <h2 className="font-serif font-bold text-2xl text-white">
              GRACE Multidisciplinary Therapy Centre &amp; Hearing Care
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Clinic Address</strong>
                  <p className="text-slate-300 leading-relaxed">
                    {BRAND.address}
                  </p>
                  <a
                    href={BRAND.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 underline mt-1 font-semibold"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-navy-800">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Direct Telephone</strong>
                  <a
                    href={`tel:${BRAND.phoneClean}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-gold-300 transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                  <span className="block text-[11px] text-slate-400 mt-0.5">
                    Click to call directly on mobile
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-navy-800">
                <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">WhatsApp Desk</strong>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-emerald-200 font-semibold underline mt-0.5"
                  >
                    <span>Chat on WhatsApp (+91 8220007614)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-navy-800">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Email Address</strong>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-slate-200 hover:text-gold-400 break-all transition-colors"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-navy-800">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 space-y-0.5">
                  <strong className="block text-white font-semibold text-sm">Operating Hours</strong>
                  <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  <p className="text-slate-400">Sunday: By Prior Appointment Only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reference Site & Social Links Note */}
          <div className="bg-ivory-50 rounded-2xl border border-ivory-border p-5 text-xs text-charcoal-700 space-y-2">
            <span className="font-bold text-navy-950 block">
              Reference Information &amp; Social Links:
            </span>
            <p>
              Reference website:{" "}
              <a
                href={BRAND.referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-900 underline font-semibold"
              >
                {BRAND.referenceUrl}
              </a>
            </p>
            <p className="text-charcoal-500 italic">
              Social profile handles will be updated upon client verification during handover.
            </p>
          </div>
        </div>

        {/* Right Form (7 cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Google Map Section */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h3 className="font-serif font-bold text-2xl text-navy-950">
            Interactive Map &amp; Directions
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Conveniently located off Village High Road in Sholinganallur, Chennai.
          </p>
        </div>
        <MapEmbed />
      </section>
    </div>
  );
}
