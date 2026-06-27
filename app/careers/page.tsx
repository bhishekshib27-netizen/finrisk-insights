import { MapPin, Clock, ArrowUpRight, Users, Zap, Globe, Heart } from "lucide-react";

export const metadata = {
  title: "Careers | FinRisk Insights",
  description: "Join the team building the leading financial intelligence platform for Mauritius.",
};

const openRoles = [
  { id: "1", title: "Financial Analyst", type: "Full-time", location: "Port Louis, Mauritius", department: "Research", description: "Produce high-quality financial analysis, market commentary, and research reports on the Mauritian financial sector.", requirements: ["Degree in Finance, Economics, or related field", "2+ years financial analysis experience", "Strong knowledge of Mauritius financial markets", "Excellent written English"] },
  { id: "2", title: "Compliance & Regulatory Writer", type: "Full-time", location: "Remote / Mauritius", department: "Content", description: "Monitor FSC, Bank of Mauritius, and FATF developments and translate regulatory updates into clear, accessible content.", requirements: ["Background in compliance, law, or regulation", "Experience writing for financial audiences", "Knowledge of AML/CFT frameworks", "Attention to detail"] },
  { id: "3", title: "Full Stack Developer", type: "Full-time", location: "Remote", department: "Engineering", description: "Help build and scale the FinRisk Insights platform. Work with Next.js, TypeScript, and financial data APIs.", requirements: ["3+ years experience with React and Next.js", "Strong TypeScript skills", "Experience with financial APIs or data", "Passion for building clean, fast products"] },
  { id: "4", title: "Business Development Manager", type: "Full-time", location: "Port Louis, Mauritius", department: "Commercial", description: "Drive partnerships with banks, financial institutions, law firms, and regulators to grow FinRisk Insights.", requirements: ["5+ years in financial services or B2B sales", "Strong network in the Mauritius financial sector", "Proven track record in partnerships or BD", "Excellent communication skills"] },
  { id: "5", title: "Podcast Producer", type: "Part-time", location: "Remote / Mauritius", department: "Content", description: "Produce and edit The FinRisk Podcast. Manage guest bookings, episode scheduling, audio editing, and distribution.", requirements: ["Experience producing podcasts or audio content", "Audio editing skills", "Organised and self-directed", "Interest in finance a plus"] },
];

const values = [
  { icon: <Zap size={20} />, title: "Move Fast", description: "We ship quickly, iterate constantly, and learn from what we build." },
  { icon: <Globe size={20} />, title: "Mauritius First", description: "Everything we do is focused on serving the Mauritian financial community." },
  { icon: <Users size={20} />, title: "Small Team", description: "We are a lean team where every person has real impact and ownership." },
  { icon: <Heart size={20} />, title: "Quality over Quantity", description: "We would rather do fewer things exceptionally well than many things poorly." },
];

const departmentColors: Record<string, string> = {
  Research: "border-blue-200 bg-blue-50 text-blue-700",
  Content: "border-green-200 bg-green-50 text-green-700",
  Engineering: "border-neutral-200 bg-neutral-50 text-neutral-600",
  Commercial: "border-amber-200 bg-amber-50 text-amber-700",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-12">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Join the Team</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Careers at FinRisk Insights</h1>
        <p className="mt-2 text-neutral-500">Help us build the leading financial intelligence platform for Mauritius.</p>
      </div>

      <div className="grid gap-6 border border-neutral-200 bg-white p-8 sm:grid-cols-3">
        <div className="text-center">
          <p className="text-3xl font-bold text-black">5+</p>
          <p className="mt-1 text-sm text-neutral-500">Open Roles</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-black">Remote</p>
          <p className="mt-1 text-sm text-neutral-500">Friendly Culture</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-black">2024</p>
          <p className="mt-1 text-sm text-neutral-500">Founded</p>
        </div>
      </div>

      <div>
        <h2 className="mb-6 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">Our Values</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={i} className="border border-neutral-200 bg-white p-5">
              <div className="mb-3 text-black">{v.icon}</div>
              <h3 className="font-bold text-black">{v.title}</h3>
              <p className="mt-1 text-sm text-neutral-500">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">Open Roles — {openRoles.length} positions</h2>
        <div className="space-y-4">
          {openRoles.map((role) => (
            <div key={role.id} className="group border border-neutral-200 bg-white p-6 transition hover:border-black hover:shadow-md">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`border px-2.5 py-0.5 text-xs font-semibold ${departmentColors[role.department] ?? "border-neutral-200 bg-neutral-50 text-neutral-600"}`}>{role.department}</span>
                    <span className="flex items-center gap-1 text-xs text-neutral-400"><Clock size={11} />{role.type}</span>
                    <span className="flex items-center gap-1 text-xs text-neutral-400"><MapPin size={11} />{role.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-neutral-600 transition">{role.title}</h3>
                  <p className="text-sm text-neutral-500">{role.description}</p>
                  <div className="space-y-1">
                    {role.requirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                        <span className="h-1 w-1 shrink-0 bg-green-500" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
                <a href={`mailto:careers@finriskinsights.mu?subject=Application: ${role.title}`} className="inline-flex shrink-0 items-center gap-2 bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
                  Apply Now <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-black bg-black p-8">
        <h2 className="text-xl font-bold text-white">Don't see a role that fits?</h2>
        <p className="mt-2 text-sm text-neutral-400">We are always looking for exceptional people. Send us your CV and tell us how you can contribute to FinRisk Insights.</p>
        <a href="mailto:careers@finriskinsights.mu" className="mt-6 inline-flex items-center gap-2 border border-white px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
          Send Open Application <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
