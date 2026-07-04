"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const subjects = [
  "General Enquiry",
  "Press & Media",
  "Post a Job",
  "Partnership",
  "Premium Interest",
  "Podcast Guest",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "General Enquiry", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-0">
      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-6 sm:px-12 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Get in Touch</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-xl text-blue-200">We are a small team — we read and respond to every message personally within 48 hours.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left - info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">What we can help with</p>
              <div className="space-y-3">
                {[
                  { title: "Press & Media", desc: "Interviews, data requests, or comment on Mauritius finance." },
                  { title: "Post a Job", desc: "Feature a role on our finance careers hub." },
                  { title: "Partnerships", desc: "Sponsorships, content, or data collaborations." },
                  { title: "Premium Interest", desc: "Be first to know when Premium launches." },
                  { title: "Podcast Guest", desc: "Apply to appear on The FinRisk Podcast." },
                  { title: "General Enquiries", desc: "Anything else — we are happy to help." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 border-b border-neutral-100 pb-3 last:border-0">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 bg-blue-900" />
                    <div>
                      <p className="text-sm font-bold text-black">{item.title}</p>
                      <p className="text-xs text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Direct Email</p>
              <a href="mailto:hello@finriskinsight.com" className="text-sm font-bold text-blue-900 hover:text-blue-700 transition">
                hello@finriskinsight.com
              </a>
            </div>
          </div>

          {/* Right - form */}
          <div className="border border-neutral-200 bg-white p-8">
            {status === "success" ? (
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center bg-blue-50 border border-blue-200">
                  <Check size={22} className="text-blue-900" />
                </div>
                <p className="font-bold text-black">Message sent!</p>
                <p className="text-sm text-neutral-500">We will get back to you within 48 hours.</p>
                <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "General Enquiry", message: "" }); }} className="text-xs text-blue-900 underline">
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="mt-1 w-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:border-blue-900 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="mt-1 w-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:border-blue-900 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-1 w-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-black outline-none focus:border-blue-900 transition"
                  >
                    {subjects.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="mt-1 w-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:border-blue-900 transition resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading" || !form.name || !form.email || !form.message}
                  className="flex w-full items-center justify-center gap-2 bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : <>Send Message <ArrowUpRight size={16} /></>}
                </button>
                {status === "error" && <p className="text-xs text-red-500 text-center">Something went wrong. Please try again.</p>}
                <p className="text-xs text-neutral-400 text-center">We aim to respond within 48 hours.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
