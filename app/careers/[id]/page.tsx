import { getJobById, getAllJobIds } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Clock, Building2, ArrowUpRight, Briefcase } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export async function generateStaticParams() {
  const ids = await getAllJobIds().catch(() => []);
  return ids.map((j) => ({ id: j.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await getJobById(id).catch(() => null);
  if (!job) return { title: "Job | FinRisk Insights" };

  const title = `${job.title} at ${job.company}`;
  const description = job.description || `${job.title} — ${job.company}, ${job.location}, Mauritius.`;
  const url = `https://www.finriskinsight.com/careers/${id}`;

  return {
    title: `${title} | FinRisk Insights`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "FinRisk Insights",
      images: ["https://www.finriskinsight.com/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.finriskinsight.com/og-image.jpg"],
    },
  };
}

const sectorColors: Record<string, string> = {
  Compliance: "border-amber-200 bg-amber-50 text-amber-700",
  Finance: "border-blue-200 bg-blue-50 text-blue-700",
  Accounting: "border-green-200 bg-green-50 text-green-700",
  Legal: "border-violet-200 bg-violet-50 text-violet-700",
  Other: "border-neutral-200 bg-neutral-50 text-neutral-600",
};

function employmentTypeSchema(type: string): string {
  const map: Record<string, string> = {
    "Full-time": "FULL_TIME",
    "Part-time": "PART_TIME",
    "Internship": "INTERN",
    "Contract": "CONTRACTOR",
  };
  return map[type] ?? "FULL_TIME";
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await getJobById(id).catch(() => null);

  if (!job) notFound();

  const canonicalUrl = `https://www.finriskinsight.com/careers/${id}`;
  const postedDate = new Date(job.postedAt);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 60);

  const jobJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: "FinRisk Insights",
      value: job._id,
    },
    datePosted: job.postedAt,
    validThrough: validThrough.toISOString(),
    employmentType: employmentTypeSchema(job.type),
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "MU",
      },
    },
    ...(job.workStyle === "Remote" ? { jobLocationType: "TELECOMMUTE" } : {}),
    directApply: false,
  };

  return (
    <div className="mx-auto max-w-3xl px-8 sm:px-12 py-10 space-y-8">
      <Script
        id="job-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobJsonLd) }}
      />

      <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-black">
        <ArrowLeft size={14} /> Back to Careers
      </Link>

      <div className="border-b border-neutral-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`border px-2.5 py-0.5 text-xs font-semibold ${sectorColors[job.sector] ?? sectorColors.Other}`}>{job.sector}</span>
          <span className="border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs text-neutral-500">{job.type}</span>
          <span className="border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs text-neutral-500">{job.workStyle}</span>
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">{job.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-neutral-500">
          <span className="flex items-center gap-1.5"><Building2 size={14} />{job.company}</span>
          <span className="flex items-center gap-1.5"><MapPin size={14} />{job.location}, Mauritius</span>
          <span className="flex items-center gap-1.5"><Clock size={14} />Posted {postedDate.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="font-bold text-black text-base mb-2">About the Role</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">{job.description}</p>
        </div>

        {job.requirements?.length > 0 && (
          <div>
            <h2 className="font-bold text-black text-base mb-2">Requirements</h2>
            <ul className="space-y-1.5">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border border-neutral-200 bg-neutral-50 p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <Briefcase size={14} />
          Apply directly with {job.company}
        </div>
        <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
          Apply Now <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
