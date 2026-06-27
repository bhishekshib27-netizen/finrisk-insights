import { getArticleBySlug, getAllArticles } from "@/lib/data/articles";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | FinRisk Insights`,
    description: article.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  Markets: "border-blue-200 bg-blue-50 text-blue-700",
  Compliance: "border-amber-200 bg-amber-50 text-amber-700",
  Economy: "border-green-200 bg-green-50 text-green-700",
  FX: "border-violet-200 bg-violet-50 text-violet-700",
  "Monetary Policy": "border-neutral-200 bg-neutral-50 text-neutral-600",
  Regulation: "border-rose-200 bg-rose-50 text-rose-700",
};

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="mt-8 mb-3 text-xl font-bold text-black">{line.replace("## ", "")}</h2>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={i} className="mt-4 mb-1 font-bold text-black">{line.replace(/\*\*/g, "")}</p>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={i} className="ml-4 text-neutral-700 list-disc">{line.replace("- ", "")}</li>);
    } else if (line.match(/^\d+\./)) {
      elements.push(<li key={i} className="ml-4 text-neutral-700 list-decimal">{line.replace(/^\d+\.\s/, "")}</li>);
    } else if (line.length > 0) {
      elements.push(<p key={i} className="mt-3 text-neutral-700 leading-relaxed">{line}</p>);
    }
    i++;
  }
  return elements;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-black">
        <ArrowLeft size={14} /> Back to Insights
      </Link>

      <div className="border-b border-neutral-200 pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className={`border px-2.5 py-0.5 text-xs font-semibold ${categoryColors[article.category] ?? "border-neutral-200 bg-neutral-50 text-neutral-600"}`}>
            {article.category}
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg text-neutral-500 leading-relaxed">{article.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5"><User size={13} />{article.author} — {article.authorRole}</span>
          <span className="flex items-center gap-1.5"><Calendar size={13} />{article.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={13} />{article.readTime} read</span>
        </div>
      </div>

      <div className="space-y-1 text-base">
        {renderContent(article.content)}
      </div>

      <div className="border-t border-neutral-200 pt-8">
        <div className="border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">About the Author</p>
          <p className="mt-2 font-bold text-black">{article.author}</p>
          <p className="text-sm text-neutral-500">{article.authorRole} — FinRisk Insights</p>
          <p className="mt-2 text-sm text-neutral-500">FinRisk Insights is the leading financial intelligence platform for Mauritius, covering markets, regulation, research, and economic analysis.</p>
        </div>
      </div>

      <div className="border-t border-neutral-200 pt-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">More Insights</h2>
        <Link href="/insights" className="inline-flex items-center gap-2 bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
          View All Articles →
        </Link>
      </div>
    </div>
  );
}
