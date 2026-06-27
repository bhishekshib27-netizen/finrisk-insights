import { getAllPosts } from "@/lib/sanity/queries";
import { getAllArticles } from "@/lib/data/articles";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

export const metadata = {
  title: "Insights | FinRisk Insights",
  description: "Financial analysis, market commentary and intelligence for Mauritius.",
};

const categoryColors: Record<string, string> = {
  Markets: "border-blue-200 bg-blue-50 text-blue-700",
  Compliance: "border-amber-200 bg-amber-50 text-amber-700",
  Economy: "border-green-200 bg-green-50 text-green-700",
  FX: "border-violet-200 bg-violet-50 text-violet-700",
  "Monetary Policy": "border-neutral-200 bg-neutral-50 text-neutral-600",
  Regulation: "border-rose-200 bg-rose-50 text-rose-700",
};

const categories = ["All", "Markets", "Economy", "Compliance", "FX", "Monetary Policy", "Regulation"];

export default async function InsightsPage() {
  let sanityPosts: any[] = []
  try {
    sanityPosts = await getAllPosts()
  } catch {}

  const hardcodedArticles = getAllArticles()

  const sanityFormatted = sanityPosts.map((post) => ({
    slug: post.slug.current,
    title: post.title,
    category: post.categories?.[0]?.title ?? "Insights",
    date: new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readTime: "5 min",
    excerpt: post.excerpt ?? "",
    fromSanity: true,
  }))

  const hardcodedFormatted = hardcodedArticles.map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    date: a.date,
    readTime: a.readTime,
    excerpt: a.excerpt,
    fromSanity: false,
  }))

  const allArticles = [...sanityFormatted, ...hardcodedFormatted]
  const featured = allArticles.slice(0, 2)
  const rest = allArticles.slice(2)

  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10 space-y-10">

      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Intelligence</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Insights</h1>
        <p className="mt-2 text-neutral-500">Financial analysis, market commentary, and intelligence on Mauritius.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button key={cat} className={`border px-4 py-1.5 text-xs font-semibold transition ${cat === "All" ? "border-black bg-black text-white" : "border-neutral-200 bg-white text-neutral-600 hover:border-black hover:text-black"}`}>
            {cat}
          </button>
        ))}
      </div>

      <div>
        <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">Featured</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((article) => (
            <Link key={article.slug} href={`/insights/${article.slug}`} className="group border border-neutral-200 bg-white p-6 transition hover:border-black hover:shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <span className={`border px-2.5 py-0.5 text-xs font-semibold ${categoryColors[article.category] ?? "border-neutral-200 bg-neutral-50 text-neutral-600"}`}>
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-400"><Clock size={11} />{article.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-black group-hover:text-neutral-600 transition">{article.title}</h3>
              <p className="mt-2 text-sm text-neutral-500 line-clamp-3">{article.excerpt}</p>
              <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
                <span className="text-xs text-neutral-400">{article.date}</span>
                <span className="flex items-center gap-1 text-sm font-semibold text-black group-hover:text-neutral-600 transition">
                  Read more <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">Latest</h2>
        <div className="space-y-3">
          {rest.map((article) => (
            <Link key={article.slug} href={`/insights/${article.slug}`} className="group flex items-start justify-between gap-6 border border-neutral-200 bg-white p-6 transition hover:border-black hover:shadow-md">
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`border px-2.5 py-0.5 text-xs font-semibold ${categoryColors[article.category] ?? "border-neutral-200 bg-neutral-50 text-neutral-600"}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-neutral-400"><Clock size={11} />{article.readTime}</span>
                  <span className="text-xs text-neutral-400">{article.date}</span>
                </div>
                <h3 className="font-semibold text-black group-hover:text-neutral-600 transition">{article.title}</h3>
                <p className="text-sm text-neutral-500 line-clamp-2">{article.excerpt}</p>
              </div>
              <ArrowUpRight size={18} className="mt-1 shrink-0 text-neutral-300 group-hover:text-black transition" />
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
