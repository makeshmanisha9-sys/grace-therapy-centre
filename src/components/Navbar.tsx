"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronDown,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Hearing Care", href: "/services/hearing-care" },
    { label: "Teletherapy", href: "/teletherapy" },
    { label: "Facilities", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top utility bar - cohesive midnight blue with fine gold hairline */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-slate-300 text-[11px] sm:text-xs py-2 px-4 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-gold-300 transition-colors font-medium tracking-wide"
              aria-label={`Call us at ${BRAND.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="hidden md:inline-flex items-center gap-1.5 text-slate-300 hover:text-gold-300 transition-colors"
              aria-label={`Email us at ${BRAND.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span className="truncate max-w-[220px]">{BRAND.email}</span>
            </a>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>Sholinganallur, Chennai - 600119</span>
            </span>
          </div>

          {/* Right Hours & Staff Portal */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </span>
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-gold-300 transition-colors pl-2.5 border-l border-navy-800"
            >
              <ShieldCheck className="w-3 h-3 text-gold-500" />
              <span>Staff Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar - luminous warm ivory backdrop with subtle glass blur */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FCFAF6]/95 backdrop-blur-md shadow-card border-b border-ivory-border"
            : "bg-[#FCFAF6] border-b border-ivory-border/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo in original proportions */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-xl p-1"
              aria-label="GRACE Multidisciplinary Therapy Centre and Hearing Care Home"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-white rounded-full p-1 shadow-subtle border border-gold-300/80 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/grace-logo.jpg"
                  alt="GRACE Therapy Centre Logo"
                  fill
                  sizes="56px"
                  className="object-contain rounded-full p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-bold text-navy-950 tracking-tight leading-none group-hover:text-navy-800 transition-colors">
                  GRACE
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-gold-700 tracking-wider uppercase mt-1 leading-tight">
                  Multidisciplinary Therapy &amp; Hearing Care
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                          isActive
                            ? "text-navy-950 bg-navy-50/80 border border-navy-100"
                            : "text-charcoal-700 hover:text-navy-950 hover:bg-ivory-200"
                        }`}
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-gold-600 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Services Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute left-0 mt-1.5 w-[560px] rounded-2xl bg-white shadow-cardHover border border-ivory-border p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="px-2 py-1.5 border-b border-ivory-200 mb-2.5 flex items-center justify-between">
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
                                Clinical Disciplines
                              </p>
                              <p className="text-xs text-charcoal-600">
                                Unified multidisciplinary therapy &amp; hearing care
                              </p>
                            </div>
                            <Link
                              href="/services"
                              className="text-xs font-bold text-navy-900 hover:text-gold-700 flex items-center gap-1"
                            >
                              <span>View All (12)</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {SERVICES.map((srv) => (
                              <Link
                                key={srv.slug}
                                href={`/services/${srv.slug}`}
                                className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-navy-50/70 transition-colors group"
                              >
                                <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200">
                                  <Image
                                    src={srv.imageUrl}
                                    alt={srv.name}
                                    fill
                                    sizes="36px"
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-bold text-navy-950 group-hover:text-gold-800 truncate">
                                    {srv.name}
                                  </div>
                                  <div className="text-[10px] text-charcoal-500 truncate">
                                    {srv.shortTag}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-ivory-200 flex items-center justify-between text-xs px-2">
                            <span className="text-charcoal-600 font-medium text-[11px]">
                              Foundation of 25+ years in Speech-Language Pathology &amp; Paediatric Rehabilitation
                            </span>
                            <Link
                              href="/appointments"
                              className="font-bold text-navy-900 hover:text-gold-700 flex items-center gap-1 flex-shrink-0"
                            >
                              <span>Book Session</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? "text-navy-950 bg-navy-50/80 border border-navy-100"
                        : "text-charcoal-700 hover:text-navy-950 hover:bg-ivory-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BRAND.phoneClean}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-navy-900 bg-white border border-ivory-border hover:border-gold-400 rounded-xl transition-all shadow-subtle hover:shadow-sm"
                aria-label="Direct Phone Consultation"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call Desk</span>
              </a>
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 rounded-xl shadow-md hover:shadow-goldGlow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Mobile hamburger button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/appointments"
                className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-navy-900 rounded-lg shadow-sm"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-charcoal-700 hover:text-navy-900 hover:bg-ivory-200 focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 z-50 bg-navy-950/40 backdrop-blur-sm">
          <div className="bg-white border-b border-ivory-border shadow-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-3">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      pathname === link.href
                        ? "bg-navy-900 text-white"
                        : "text-charcoal-800 hover:bg-ivory-200"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {link.hasDropdown && (
                    <div className="pl-4 py-1.5 space-y-1 border-l-2 border-gold-400 ml-3 my-1">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-2 py-1.5 text-xs font-medium text-charcoal-700 hover:text-navy-900"
                        >
                          • {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-ivory-border space-y-2.5">
              <a
                href={`tel:${BRAND.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-navy-900 bg-navy-50 border border-navy-200"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call Clinic: {BRAND.phone}</span>
              </a>
              <Link
                href="/appointments"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-900 shadow-md"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Request Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
