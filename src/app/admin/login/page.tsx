"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Lock, ArrowRight, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!password) {
      setError("Please enter the staff security password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.message || "Invalid credentials.");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Network connection error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-warm-border shadow-card">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="relative w-16 h-16 mx-auto bg-warm-white rounded-full p-1 border border-gold-300">
            <Image
              src="/images/grace-logo.jpg"
              alt="GRACE Therapy Centre Logo"
              fill
              sizes="64px"
              className="object-contain rounded-full"
            />
          </div>
          <h1 className="text-2xl font-serif font-bold text-navy-900">
            Staff Administrative Portal
          </h1>
          <p className="text-xs text-charcoal-600">
            {BRAND.name}
          </p>
        </div>

        {/* Demo Credentials Guidance Box */}
        <div className="bg-navy-50/70 border border-navy-200 rounded-xl p-3.5 text-xs text-navy-950 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-navy-900">
            <ShieldCheck className="w-4 h-4 text-gold-600" />
            <span>Staff Authentication Notice</span>
          </div>
          <p className="text-[11px] text-navy-800 leading-normal">
            Authorised staff can log in using the configured staff password (Default in development: <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-navy-950 border border-navy-200">GraceCare2026!</code> or configured in <code className="font-mono">.env.local</code>).
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="staff-password"
              className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
            >
              Staff Access Key / Password
            </label>
            <div className="relative">
              <input
                id="staff-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-charcoal-900 focus:outline-none focus:border-navy-700 focus:ring-2 focus:ring-navy-100"
              />
              <Lock className="absolute right-3.5 top-3 w-4 h-4 text-charcoal-400 pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-navy-900 hover:bg-navy-800 disabled:bg-slate-400 transition-colors shadow-md"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <span>Enter Staff Dashboard</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2">
          <Link
            href="/"
            className="text-xs font-semibold text-charcoal-600 hover:text-navy-900 transition-colors"
          >
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
