"use client";

import { useState } from "react";
import { X, Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface NewsletterModalProps {
  open: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ open, onClose }: NewsletterModalProps) {
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
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 border border-neutral-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-black" />
            <p className="text-sm font-bold text-black">FinRisk Intelligence Briefing</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 transition hover:text-black">
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-6">
          {status === "success" ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-green-200 bg-green-50">
                <CheckCircle size={22} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black">You are subscribed</h3>
              <p className="mt-2 text-sm text-neutral-500">Welcome to FinRisk Insights. We will be in touch soon.</p>
              <button onClick={onClose} className="mt-6 bg-black px-6 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Weekly financial intelligence for Mauritius — markets, regulation, research, and events delivered to your inbox.
              </p>

              <ul className="mt-4 space-y-2">
                {[
                  "Live market updates and FX movements",
                  "Regulatory alerts from FSC and Bank of Mauritius",
                  "Exclusive research and analysis",
                  "Upcoming events and MPC decisions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-neutral-600">
                    <span className="h-1.5 w-1.5 shrink-0 bg-green-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:border-black transition"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="w-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:border-black transition"
                />

                {status === "error" && <p className="text-xs text-red-500">{message}</p>}

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading" || !email}
                  className="flex w-full items-center justify-center gap-2 bg-black px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <>Subscribe Free <ArrowRight size={14} /></>
                  )}
                </button>

                <p className="text-center text-xs text-neutral-400">No spam. Unsubscribe anytime.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
