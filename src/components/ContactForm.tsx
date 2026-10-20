"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please enter your name.";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
      errs.phone = "Please enter a valid phone number (10+ digits).";
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!message.trim() || message.length < 5) {
      errs.message = "Please write a brief message (min 5 characters).";
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          serviceInterest,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setSubmitError(data.message || "Failed to submit enquiry. Please call us.");
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
      setIsSubmitting(false);
    } catch {
      setSubmitError("Network connection error. Please call +91 8220007614 directly.");
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-10 text-center shadow-subtle">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-serif font-bold text-navy-950 mb-2">
          Message Sent Successfully
        </h4>
        <p className="text-sm text-charcoal-700 max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for reaching out to GRACE Therapy Centre. Our clinical coordination desk will review your inquiry and get back to you promptly.
        </p>
        <button
          type="button"
          onClick={() => {
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setSubmitted(false);
          }}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-900 bg-warm-white hover:bg-warm-cream border border-warm-border transition-colors shadow-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl border border-ivory-border p-7 sm:p-9 shadow-subtle"
    >
      <div className="mb-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-gold-700 bg-gold-50/80 px-3 py-1 rounded-full border border-gold-200">
          Direct Clinical Desk
        </span>
        <h3 className="text-2xl font-serif font-bold text-navy-950 mt-2 mb-1">
          Send Us a Message
        </h3>
        <p className="text-xs text-charcoal-600 leading-relaxed">
          Have questions about therapies, evaluations, or visiting our clinic? Fill out the form below.
        </p>
      </div>

      {submitError && (
        <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
            Your Name <span className="text-rose-600">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Anand Kumar"
            className="w-full rounded-xl border border-warm-border px-4 py-2.5 text-sm text-charcoal-900 bg-warm-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-600 transition-all"
          />
          {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 8220007614"
              className="w-full rounded-xl border border-warm-border px-4 py-2.5 text-sm text-charcoal-900 bg-warm-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-600 transition-all"
            />
            {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
              Email Address <span className="text-rose-600">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="anand@example.com"
              className="w-full rounded-xl border border-warm-border px-4 py-2.5 text-sm text-charcoal-900 bg-warm-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-600 transition-all"
            />
            {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
            Service of Interest <span className="text-xs font-normal text-charcoal-500">(Optional)</span>
          </label>
          <select
            id="contact-service"
            value={serviceInterest}
            onChange={(e) => setServiceInterest(e.target.value)}
            className="w-full rounded-xl border border-warm-border px-4 py-2.5 text-sm text-charcoal-900 bg-warm-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-600 transition-all"
          >
            <option value="">-- Select an option --</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="General Consultation">General Inquiry / Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
            Your Message <span className="text-rose-600">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us how we can help you or your child..."
            className="w-full rounded-xl border border-warm-border px-4 py-2.5 text-sm text-charcoal-900 bg-warm-white/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-600 transition-all"
          />
          {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white bg-navy-900 hover:bg-navy-800 active:scale-[0.99] transition-all shadow-md group disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
