import { getAuthorBySlug, getPostsByAuthor } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug).catch(() => null);
  if (!author) return { title: "Author | FinRisk Insights" };

  return {
    title: `${author.name} | FinRisk Insights`,
    description: author.bio || `Articles by ${author.name} on FinRisk Insights.`,
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug).catch(() => null);

  if (!author) notFound();

  const posts = await getPostsByAuthor(author._id).catch(() => []);
  const photoUrl = author.photo ? urlFor(author.photo)?.width(200).height(200).url() : null;

  return (
    <div className="mx-auto max-w-3xl px-8 sm:px-12 py-10 space-y-10">
      <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-black">
        <ArrowLeft size={14} /> Back to Insights
      </Link>

      <div className="flex flex-col sm:flex-row items-start gap-6 border-b border-neutral-200 pb-8">
        {photoUrl ? (
          <img src={photoUrl} alt={author.name} className="h-24 w-24 rounded-full object-cover shrink-0" />
        ) : (
          <div className="h-24 w-24 shrink-0 rounded-full bg-blue-900 flex items-center justify-center text-white text-2xl font-bold">
            {author.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">{author.role || "Contributor"}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-black">{author.name}</h1>
          {author.bio && <p className="mt-3 max-w-xl text-neutral-600 leading-relaxed">{author.bio}</p>}
          {author.linkedIn && (
            <a href={author.linkedIn} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-blue-700 transition">
              <ExternalLink size={14} /> LinkedIn
            </a>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-black mb-4">Articles by {author.name}</h2>
        {posts.length === 0 ? (
          <p className="text-sm text-neutral-500">No published articles yet.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link key={post._id} href={`/insights/${post.slug.current}`} className="block border border-neutral-200 p-5 transition hover:border-black hover:shadow-sm">
                <p className="font-bold text-black">{post.title}</p>
                <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{post.excerpt}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-blue-900">
                  Read more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
