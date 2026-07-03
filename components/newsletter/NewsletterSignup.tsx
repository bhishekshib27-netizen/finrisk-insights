"use client";

import { useState } from "react";
import { ArrowRight, Mail, Check } from "lucide-react";

export default function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");

  const handleSubmit = async () => {
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.status === 409) {
        setStatus("duplicate");
      } else if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-neutral-200 bg-white p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-blue-200 bg-blue-50">
          <Check size={22} className="text-blue-900" />
        </div>
        <p className="font-bold text-black">You are subscribed!</p>
        <p className="mt-1 text-sm text-neutral-500">
          Welcome to the FinRisk Intelligence Briefing. You will hear from us soon.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-neutral-200 bg-white p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center border border-neutral-200 bg-neutral-50">
          <Mail size={18} className="text-blue-900" />
        </div>
        <div>
          <p className="text-sm font-bold text-black">FinRisk Intelligence Briefing</p>
          <p className="text-xs text-neutral-400">Weekly financial intelligence for Mauritius</p>
        </div>
      </div>

      <div className="mb-4 space-y-1.5 text-sm text-neutral-600">
        {[
          "Live market updates and FX movements",
          "Regulatory alerts from FSC and Bank of Mauritius",
          "Exclusive research and analysis",
          "Upcoming events and MPC decisions",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 bg-blue-900" />
            {item}
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:border-blue-900 transition"
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="w-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:border-blue-900 transition"
        />
        <button
          onClick={handleSubmit}
          disabled={status === "loading" || !email}
          className="flex w-full items-center justify-center gap-2 bg-blue-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : <>Subscribe Free <ArrowRight size={16} /></>}
        </button>
      </div>

      {status === "duplicate" && (
        <p className="mt-3 text-center text-xs text-amber-600">You are already subscribed!</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-xs text-red-500">Something went wrong. Please try again.</p>
      )}
      <p className="mt-3 text-center text-xs text-neutral-400">No spam. Unsubscribe anytime. Free forever.</p>
    </div>
  );
}
