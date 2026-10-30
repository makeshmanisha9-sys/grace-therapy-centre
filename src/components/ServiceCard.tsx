import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Hand,
  BrainCircuit,
  BookOpen,
  Activity,
  Ear,
  Laptop,
  Users,
  Heart,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { ServiceInfo } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  MessageCircle,
  Hand,
  BrainCircuit,
  BookOpen,
  Activity,
  Ear,
  Laptop,
  Users,
  Heart,
};

interface ServiceCardProps {
  service: ServiceInfo;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || MessageCircle;

  return (
    <article
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 overflow-hidden ${
        featured
          ? "border-gold-300 shadow-card hover:shadow-cardHover"
          : "border-ivory-border shadow-subtle hover:shadow-cardHover hover:border-gold-300"
      }`}
    >
      <div>
        {/* Top Image Thumbnail Container with 16:10 aspect ratio */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
          <Image
            src={service.imageUrl}
            alt={`${service.name} clinical session at GRACE Centre`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle gradient vignette at bottom of image */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-80" />

          {/* Floating Icon Badge & Online Pill */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <div className="w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-gold-300/80 flex items-center justify-center text-navy-800 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors">
              <IconComponent className="w-5 h-5 flex-shrink-0" />
            </div>

            {service.isTeletherapyAvailable && (
              <span className="text-[11px] font-bold text-emerald-900 bg-white/95 backdrop-blur-md border border-emerald-300 px-2.5 py-0.5 rounded-full shadow-sm">
                Teletherapy Available
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Subtitle tag */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-gold-700 mb-1.5">
            {service.shortTag}
          </p>

          {/* Service Title */}
          <h3 className="text-xl font-serif font-bold text-navy-950 mb-2.5 group-hover:text-navy-800 transition-colors">
            <Link href={`/services/${service.slug}`} className="focus:outline-none">
              {service.name}
            </Link>
          </h3>

          {/* Description with uniform clamp */}
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed line-clamp-3 mb-4">
            {service.shortDescription}
          </p>

          {/* Subcategories tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {service.subcategories.map((sub) => (
              <span
                key={sub}
                className="text-[11px] bg-navy-50/70 text-navy-900 px-2 py-0.5 rounded-md font-medium border border-navy-100"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 py-4 bg-ivory-50 border-t border-ivory-border flex items-center justify-between gap-3">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-700 transition-colors py-1 group/btn"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold-600 transition-transform group-hover/btn:translate-x-1" />
        </Link>

        <Link
          href={`/appointments?service=${encodeURIComponent(service.name)}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 bg-gold-400 hover:bg-gold-500 px-3.5 py-1.5 rounded-lg transition-colors shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </Link>
      </div>
    </article>
  );
}
