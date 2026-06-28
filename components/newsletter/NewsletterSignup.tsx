"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export default function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-blue-800 p-8 text-center" style={{background:"rgba(255,255,255,0.08)"}}>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-blue-400 bg-blue-900">
          <CheckCircle size={24} className="text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-black">You are subscribed</h3>
        <p className="mt-2 text-sm text-neutral-500">Welcome to FinRisk Insights. You will receive our latest intelligence directly in your inbox.</p>
      </div>
    );
  }

  return (
    <div className="border border-blue-800 p-8" style={{background:"rgba(255,255,255,0.08)"}}>
      <div className="mb-6 flex items-center gap-3">
        <div className="border border-blue-700 p-2" style={{background:"rgba(255,255,255,0.1)"}}>
          <Mail size={18} className="text-black" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-black">FinRisk Intelligence Briefing</h3>
          <p className="text-sm text-neutral-500">Weekly financial intelligence for Mauritius</p>
        </div>
      </div>

      <ul className="mb-6 space-y-2">
        {[
          "Live market updates and FX movements",
          "Regulatory alerts from FSC and Bank of Mauritius",
          "Exclusive research and analysis",
          "Upcoming events and MPC decisions",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="h-1.5 w-1.5 shrink-0 bg-blue-300" />
            {item}
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-blue-700 px-4 py-2.5 text-sm text-white placeholder:text-blue-400 outline-none focus:border-blue-300 transition" style={{background:"rgba(255,255,255,0.08)"}}
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="w-full border border-blue-700 px-4 py-2.5 text-sm text-white placeholder:text-blue-400 outline-none focus:border-blue-300 transition" style={{background:"rgba(255,255,255,0.08)"}}
        />

        {status === "error" && <p className="text-xs text-red-500">{message}</p>}

        <button
          onClick={handleSubmit}
          disabled={status === "loading" || !email}
          className="flex w-full items-center justify-center gap-2 bg-blue-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>Subscribe Free <ArrowRight size={16} /></>
          )}
        </button>

        <p className="text-center text-xs text-neutral-400">No spam. Unsubscribe anytime. Free forever.</p>
      </div>
    </div>
  );
}
