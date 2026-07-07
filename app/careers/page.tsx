import { MapPin, Clock, Building2, ArrowUpRight, Briefcase } from "lucide-react";

export const metadata = {
  title: "Finance Jobs in Mauritius | FinRisk Insights",
  description: "Curated finance, compliance, legal and accounting jobs in Mauritius.",
};

const jobs = [
  {
    id: 1,
    title: "Jr. KYC Analyst",
    company: "Citco Group",
    sector: "Compliance",
    type: "Full-time",
    location: "Port Louis",
    workStyle: "Hybrid",
    posted: "3 days ago",
    description: "Join the Central KYC Team supporting client onboarding and ongoing due diligence. Role involves KYC/AML analysis, UBO assessments, sanctions screening, and regulatory compliance across multiple jurisdictions.",
    requirements: ["University degree in relevant field", "0-2 years experience", "Fluency in English", "Strong analytical skills"],
    applyUrl: "https://www.linkedin.com/company/the-citco-group-limited/jobs/",
  },
  {
    id: 2,
    title: "Accounts Payable Agent (PTP)",
    company: "DHL Express",
    sector: "Finance",
    type: "Full-time",
    location: "Port Louis",
    workStyle: "On-site",
    posted: "3 days ago",
    description: "Process accounts payable activities for DHL Mauritius Shared Services Centre. Includes invoice posting, vendor query resolution, reconciliation, and internal financial controls support.",
    requirements: ["ACCA Level 1 or HSC with Accounting", "2-3 years accounting experience", "Reconciliation and banking experience", "Strong MS Excel skills"],
    applyUrl: "https://www.linkedin.com/company/dhl-express/jobs/",
  },
  {
    id: 3,
    title: "Accountant - Client Accounting",
    company: "Ocorian",
    sector: "Accounting",
    type: "Full-time",
    location: "Moka",
    workStyle: "Hybrid",
    posted: "5 days ago",
    description: "Prepare and review financial statements and management accounts for semi-complex client entities. Includes VAT returns, audit liaison, and junior staff guidance at a leading fund services firm.",
    requirements: ["ACCA/ACA fully qualified", "Minimum 4 years experience", "Knowledge of IFRS", "Experience with Navision or Viewpoint desirable"],
    applyUrl: "https://www.ocorian.com/careers",
  },
];

const sectorColors = {
  Compliance: "border-amber-200 bg-amber-50 text-amber-700",
  Finance: "border-blue-200 bg-blue-50 text-blue-700",
  Accounting: "border-green-200 bg-green-50 text-green-700",
  Legal: "border-violet-200 bg-violet-50 text-violet-700",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-10">

      <div className="border-b border-neutral-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Career Hub</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Finance Jobs in Mauritius
        </h1>
        <p className="mt-3 max-w-xl text-neutral-500">
          Curated finance, compliance, legal and accounting roles from leading employers across Mauritius. Updated regularly from verified sources.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-500">
            <Briefcase size={12} />
            {jobs.length} open roles
          </div>
          <a href="/contact" className="inline-flex items-center gap-2 border border-black bg-blue-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-800">
            Post a Job <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["All", "Finance", "Compliance", "Accounting", "Legal"].map((sector) => (
          <span key={sector} className="cursor-pointer border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500 hover:border-black hover:text-black transition">
            {sector}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border border-neutral-200 bg-white p-6 transition hover:border-black hover:shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={"border px-2 py-0.5 text-xs font-semibold " + (sectorColors[job.sector as keyof typeof sectorColors] ?? "border-neutral-200 bg-neutral-50 text-neutral-600")}>
                    {job.sector}
                  </span>
                  <span className="border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-500">{job.type}</span>
                  <span className="border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-500">{job.workStyle}</span>
                </div>
                <h2 className="text-lg font-bold text-black">{job.title}</h2>
                <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-1"><Building2 size={13} />{job.company}</span>
                  <span className="flex items-center gap-1"><MapPin size={13} />{job.location}, Mauritius</span>
                  <span className="flex items-center gap-1"><Clock size={13} />{job.posted}</span>
                </div>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{job.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.requirements.map((req, i) => (
                    <span key={i} className="border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-500">{req}</span>
                  ))}
                </div>
              </div>
              <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-1.5 bg-blue-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800">
                Apply <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-neutral-200 bg-neutral-50 p-8 text-center">
        <h2 className="text-lg font-bold text-black">Hiring in Finance, Compliance or Accounting?</h2>
        <p className="mt-2 text-sm text-neutral-500">Reach Mauritius's most engaged finance audience. Get in touch to feature your role on FinRisk Insights.</p>
        <a href="/contact" className="mt-4 inline-flex items-center gap-2 bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
          Get in Touch <ArrowUpRight size={14} />
        </a>
      </div>

    </div>
  );
}
