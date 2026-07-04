import { ArrowUpRight, Mail } from "lucide-react";

export const metadata = {
  title: "Contact | FinRisk Insights",
  description: "Get in touch with the FinRisk Insights team.",
};

const contacts = [
  { title: "General Enquiries", desc: "Questions about the platform, partnerships, or anything else.", email: "hello@finriskinsight.com", subject: "General Enquiry" },
  { title: "Press & Media", desc: "Interviews, data requests, or comment on Mauritius financial markets.", email: "hello@finriskinsight.com", subject: "Press Enquiry" },
  { title: "Post a Job", desc: "Feature a finance, compliance, or accounting role on our careers hub.", email: "hello@finriskinsight.com", subject: "Post a Job on FinRisk" },
  { title: "Partnerships", desc: "Sponsorships, content partnerships, or data collaborations.", email: "hello@finriskinsight.com", subject: "Partnership Enquiry" },
  { title: "Premium Interest", desc: "Interested in FinRisk Premium when it launches.", email: "hello@finriskinsight.com", subject: "FinRisk Premium Interest" },
  { title: "Podcast Guest", desc: "Apply to be a guest on The FinRisk Podcast.", email: "hello@finriskinsight.com", subject: "FinRisk Podcast Guest Application" },
];

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-6 sm:px-12 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Get in Touch</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-xl text-blue-200">We are a small team — we read and respond to every message personally.</p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-12 space-y-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item, i) => (
            <a key={i} href={`mailto:${item.email}?subject=${encodeURIComponent(item.subject)}`} className="group border border-neutral-200 bg-white p-6 flex flex-col justify-between hover:border-blue-900 transition hover:shadow-sm">
              <div>
                <p className="font-bold text-black group-hover:text-blue-900 transition text-sm">{item.title}</p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-900">
                <Mail size={12} /> Send email <ArrowUpRight size={11} />
              </div>
            </a>
          ))}
        </div>
        <div className="border border-neutral-200 bg-neutral-50 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-bold text-black">Direct Email</p>
            <p className="text-sm text-neutral-500 mt-1">Reach us directly at any time.</p>
          </div>
          <a href="mailto:hello@finriskinsight.com" className="inline-flex items-center gap-2 bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 shrink-0">
            hello@finriskinsight.com <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="border border-neutral-200 bg-white p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-bold text-black">Follow on LinkedIn</p>
            <p className="text-sm text-neutral-500 mt-1">Stay updated with our latest posts and announcements.</p>
          </div>
          <a href="https://www.linkedin.com/company/finrisk-insights" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-blue-900 px-5 py-2.5 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white shrink-0">
            FinRisk Insights <ArrowUpRight size={14} />
          </a>
        </div>
        <p className="text-center text-xs text-neutral-400">We aim to respond to all enquiries within 48 hours.</p>
      </div>
    </div>
  );
}
