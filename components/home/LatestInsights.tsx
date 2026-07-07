import { getAllPosts } from "@/lib/sanity/queries";
import Link from "next/link";

const imageMap: Record<string, string> = {
  "Markets": "/category-markets.jpg",
  "Compliance": "/category-compliance.jpg",
  "Economy": "/category-economy.jpg",
  "Regulation": "/category-compliance.jpg",
  "FX": "/category-markets.jpg",
};

export default async function LatestInsights() {
  let posts: any[] = [];
  try { posts = await getAllPosts(); } catch {}

  const display = posts.slice(0, 3);

  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-8 py-16 sm:px-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">Intelligence</p>
            <h2 className="mt-1 text-2xl font-bold text-black">Latest Insights</h2>
          </div>
          <Link href="/insights" className="text-xs font-semibold text-blue-900 hover:text-blue-700 transition">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {display.map((post, i) => {
            const category = post.categories?.[0]?.title ?? "Insights";
            const image = imageMap[category] ?? "/category-economy.jpg";
            const slug = post.slug?.current ?? "";
            const date = new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
            return (
              <Link key={i} href={`/insights/${slug}`} className="group overflow-hidden border border-neutral-200 hover:border-blue-900 transition hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img src={image} alt={category} className="w-full h-full object-cover object-center transition group-hover:scale-105 duration-500" />
                  <div className="absolute inset-0" style={{background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)"}} />
                  <span className="absolute bottom-3 left-3 bg-blue-900 px-2 py-0.5 text-xs font-semibold text-white">{category}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-black group-hover:text-blue-900 transition leading-snug">{post.title}</h3>
                  <div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
                    <span>{date}</span>
                    <span>· 5 min read</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
