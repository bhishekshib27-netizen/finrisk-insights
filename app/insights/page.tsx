import { getAllPosts } from "@/lib/sanity/queries";
import { getAllArticles } from "@/lib/data/articles";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

export const metadata = {
  title: "Insights | FinRisk Insights",
  description: "Financial analysis, market commentary and intelligence for Mauritius.",
};

const categoryColors: Record<string, string> = {
  Markets: "bg-blue-900",
  Compliance: "bg-amber-700",
  Economy: "bg-green-700",
  FX: "bg-violet-700",
  "Monetary Policy": "bg-neutral-600",
  Regulation: "bg-rose-700",
};

const categoryImages: Record<string, string> = {
  Markets: "/category-markets.jpg",
  Compliance: "/category-compliance.jpg",
  Economy: "/category-economy.jpg",
  FX: "/category-markets.jpg",
  "Monetary Policy": "/category-economy.jpg",
  Regulation: "/category-compliance.jpg",
};

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
  }))

  const hardcodedFormatted = hardcodedArticles.map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    date: a.date,
    readTime: a.readTime,
    excerpt: a.excerpt,
  }))

  const allArticles = [...sanityFormatted, ...hardcodedFormatted]

  return (
    <div className="space-y-0">

      {/* Navy Hero */}
      <div className="border-b border-blue-950" style={{background:"#0f2654"}}>
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">Intelligence</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Insights</h1>
          <p className="mt-3 max-w-xl text-blue-200">Financial analysis, market commentary, and intelligence on Mauritius.</p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="mx-auto max-w-5xl px-8 sm:px-12 py-12">
        {allArticles.length === 0 ? (
          <div className="border border-neutral-200 bg-neutral-50 p-12 text-center">
            <p className="text-neutral-500">No articles yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allArticles.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="group overflow-hidden border border-neutral-200 hover:border-blue-900 transition hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={categoryImages[article.category] ?? "/category-economy.jpg"}
                    alt={article.category}
                    className="w-full h-full object-cover object-center transition group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0" style={{background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)"}} />
                  <span className={`absolute bottom-3 left-3 px-2 py-0.5 text-xs font-semibold text-white ${categoryColors[article.category] ?? "bg-blue-900"}`}>
                    {article.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-black group-hover:text-blue-900 transition leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-500 line-clamp-2">{article.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} />{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
