import { Briefcase, ArrowUpRight } from "lucide-react";
import { getAllJobs } from "@/lib/sanity/queries";
import JobsList from "@/components/careers/JobsList";

export const revalidate = 3600;

export const metadata = {
  title: "Finance Jobs in Mauritius | FinRisk Insights",
  description: "Curated finance, compliance, legal and accounting jobs in Mauritius.",
};

function timeAgo(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const diffDay = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDay <= 0) return "Today";
  if (diffDay === 1) return "1 day ago";
  if (diffDay < 14) return `${diffDay} days ago`;
  const diffWeek = Math.floor(diffDay / 7);
  if (diffWeek < 5) return `${diffWeek} week${diffWeek === 1 ? "" : "s"} ago`;
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export default async function CareersPage() {
  const rawJobs = await getAllJobs();
  const jobs = rawJobs.map((j) => ({ ...j, postedLabel: timeAgo(j.postedAt) }));

  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-10">

      <div className="grid gap-8 lg:grid-cols-2 lg:items-center border-b border-neutral-200 pb-8">
        <div>
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
              {jobs.length} open role{jobs.length === 1 ? "" : "s"}
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 border border-black bg-blue-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-800">
              Post a Job <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/careers-bg.jpg" alt="Finance careers in Mauritius" className="w-full object-cover" style={{height: "320px"}} />
        </div>
      </div>

      <JobsList jobs={jobs} />

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
