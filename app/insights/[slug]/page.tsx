import { getPostBySlug, getAllPostSlugs } from "@/lib/sanity/queries";
import { getArticleBySlug, getAllArticles } from "@/lib/data/articles";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const sanitySlugsList = await getAllPostSlugs().catch(() => [])
  const hardcodedSlugs = getAllArticles().map((a) => ({ slug: a.slug }))
  const all = [...sanitySlugsList, ...hardcodedSlugs]
  return all.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const sanityPost = await getPostBySlug(slug).catch(() => null)
  const hardcoded = getArticleBySlug(slug)
  const title = sanityPost?.title ?? hardcoded?.title ?? "Article"
  const description = sanityPost?.excerpt ?? hardcoded?.excerpt ?? ""
  return { title: `${title} | FinRisk Insights`, description }
}

const categoryColors: Record<string, string> = {
  Markets: "border-blue-200 bg-blue-50 text-blue-700",
  Compliance: "border-amber-200 bg-amber-50 text-amber-700",
  Economy: "border-green-200 bg-green-50 text-green-700",
  FX: "border-violet-200 bg-violet-50 text-violet-700",
  "Monetary Policy": "border-neutral-200 bg-neutral-50 text-neutral-600",
  Regulation: "border-rose-200 bg-rose-50 text-rose-700",
};

function renderHardcodedContent(content: string) {
  const lines = content.trim().split("\n")
  return lines.map((line, i) => {
    line = line.trim()
    if (line.startsWith("## ")) return <h2 key={i} className="mt-8 mb-3 text-xl font-bold text-black">{line.replace("## ", "")}</h2>
    if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="mt-4 mb-1 font-bold text-black">{line.replace(/\*\*/g, "")}</p>
    if (line.startsWith("- ")) return <li key={i} className="ml-4 text-neutral-700 list-disc">{line.replace("- ", "")}</li>
    if (line.match(/^\d+\./)) return <li key={i} className="ml-4 text-neutral-700 list-decimal">{line.replace(/^\d+\.\s/, "")}</li>
    if (line.length > 0) return <p key={i} className="mt-3 text-neutral-700 leading-relaxed">{line}</p>
    return null
  })
}

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => <h2 className="mt-8 mb-3 text-xl font-bold text-black">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mt-6 mb-2 text-lg font-bold text-black">{children}</h3>,
    normal: ({ children }: any) => <p className="mt-3 text-neutral-700 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="mt-4 border-l-4 border-black pl-4 italic text-neutral-600">{children}</blockquote>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-black">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => <a href={value?.href} className="text-green-600 underline hover:text-green-700" target="_blank" rel="noopener noreferrer">{children}</a>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="mt-3 ml-4 space-y-1 list-disc text-neutral-700">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-3 ml-4 space-y-1 list-decimal text-neutral-700">{children}</ol>,
  },
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const sanityPost = await getPostBySlug(slug).catch(() => null)
  const hardcoded = getArticleBySlug(slug)

  if (!sanityPost && !hardcoded) notFound()

  const isSanity = !!sanityPost
  const title = sanityPost?.title ?? hardcoded!.title
  const excerpt = sanityPost?.excerpt ?? hardcoded!.excerpt
  const category = sanityPost?.categories?.[0]?.title ?? hardcoded!.category
  const author = sanityPost?.author?.name ?? hardcoded!.author
  const authorRole = hardcoded?.authorRole ?? "FinRisk Insights"
  const date = isSanity
    ? new Date(sanityPost!.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : hardcoded!.date

  return (
    <div className="mx-auto max-w-3xl px-8 sm:px-12 py-10 space-y-8">

      <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-black">
        <ArrowLeft size={14} /> Back to Insights
      </Link>

      <div className="border-b border-neutral-200 pb-8">
        <div className="mb-4">
          <span className={`border px-2.5 py-0.5 text-xs font-semibold ${categoryColors[category] ?? "border-neutral-200 bg-neutral-50 text-neutral-600"}`}>
            {category}
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg text-neutral-500 leading-relaxed">{excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5"><User size={13} />{author}</span>
          <span className="flex items-center gap-1.5"><Calendar size={13} />{date}</span>
        </div>
      </div>

      <div className="space-y-1 text-base">
        {isSanity
          ? <PortableText value={sanityPost!.body} components={portableTextComponents} />
          : renderHardcodedContent(hardcoded!.content)
        }
      </div>

      <div className="border-t border-neutral-200 pt-8">
        <div className="border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">About the Author</p>
          <p className="mt-2 font-bold text-black">{author}</p>
          <p className="text-sm text-neutral-500">{authorRole} — FinRisk Insights</p>
        </div>
      </div>

      <div className="border-t border-neutral-200 pt-8">
        <Link href="/insights" className="inline-flex items-center gap-2 bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
          View All Articles →
        </Link>
      </div>

    </div>
  )
}
