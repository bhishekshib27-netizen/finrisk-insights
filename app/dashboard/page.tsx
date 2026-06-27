import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { BookOpen, FileText, Bell, Calendar, ArrowUpRight, Download, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dashboard | FinRisk Insights",
  description: "Your personal FinRisk Insights dashboard.",
};

const recentActivity = [
  { type: "article", title: "SEMDEX closes higher amid strong banking performance", time: "2 hours ago", href: "/insights/semdex-closes-higher-banking-performance" },
  { type: "report", title: "Mauritius Banking Industry Outlook 2026", time: "1 day ago", href: "/research" },
  { type: "regulation", title: "FSC issues updated AML/CFT guidance", time: "2 days ago", href: "/regulation" },
  { type: "event", title: "MPC Meeting — Bank of Mauritius", time: "3 days ago", href: "/events" },
];

const savedArticles = [
  { title: "Key AML developments every compliance officer should know", category: "Compliance", href: "/insights/aml-developments-compliance-officers" },
  { title: "MUR exchange rate outlook: pressures and opportunities", category: "FX", href: "/insights/mur-exchange-rate-outlook" },
  { title: "Virtual assets regulation in Mauritius: where things stand", category: "Regulation", href: "/insights/virtual-assets-regulation-mauritius" },
];

const quickStats = [
  { label: "Articles Read", value: "12", icon: <BookOpen size={16} /> },
  { label: "Reports Downloaded", value: "3", icon: <Download size={16} /> },
  { label: "Alerts", value: "5", icon: <Bell size={16} /> },
  { label: "Events Saved", value: "2", icon: <Calendar size={16} /> },
];

const activityIcons: Record<string, React.ReactNode> = {
  article: <BookOpen size={13} className="text-neutral-500" />,
  report: <FileText size={13} className="text-neutral-500" />,
  regulation: <Shield size={13} className="text-neutral-500" />,
  event: <Calendar size={13} className="text-neutral-500" />,
};

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  const firstName = user?.firstName ?? "there";

  return (
    <div className="space-y-10">

      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600">My Account</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Welcome back, {firstName}
        </h1>
        <p className="mt-2 text-neutral-500">
          Here is your personalised FinRisk Insights dashboard.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat, i) => (
          <div key={i} className="relative border border-neutral-200 bg-white p-6">
            <div className="absolute left-0 top-0 h-0.5 w-full bg-black" />
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{stat.label}</p>
              <div className="text-neutral-400">{stat.icon}</div>
            </div>
            <p className="mt-3 font-mono text-3xl font-bold text-black">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div>
          <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <Link key={i} href={item.href} className="group flex items-start gap-4 border border-neutral-200 bg-white p-4 transition hover:border-black hover:shadow-sm">
                <div className="mt-0.5 border border-neutral-200 bg-neutral-50 p-2">
                  {activityIcons[item.type]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-black group-hover:text-neutral-600 transition line-clamp-1">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-400">{item.time}</p>
                </div>
                <ArrowUpRight size={14} className="mt-1 shrink-0 text-neutral-300 group-hover:text-black transition" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">
            Saved Articles
          </h2>
          <div className="space-y-3">
            {savedArticles.map((article, i) => (
              <Link key={i} href={article.href} className="group flex items-start justify-between gap-4 border border-neutral-200 bg-white p-4 transition hover:border-black hover:shadow-sm">
                <div className="space-y-1">
                  <span className="inline-block border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs font-semibold text-neutral-500">
                    {article.category}
                  </span>
                  <p className="text-sm font-semibold text-black group-hover:text-neutral-600 transition line-clamp-2">
                    {article.title}
                  </p>
                </div>
                <ArrowUpRight size={14} className="mt-1 shrink-0 text-neutral-300 group-hover:text-black transition" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">
            Market Watchlist
          </h2>
          <div className="border border-neutral-200 bg-white">
            {[
              { name: "SEMDEX", value: "2,145.32", change: "+0.42%", up: true },
              { name: "USD/MUR", value: "45.12", change: "Live", up: null },
              { name: "EUR/MUR", value: "49.84", change: "Live", up: null },
              { name: "Repo Rate", value: "4.50%", change: "Stable", up: null },
              { name: "Inflation", value: "3.2%", change: "-0.4%", up: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-neutral-100 px-4 py-3 last:border-0">
                <p className="text-sm font-semibold text-black">{item.name}</p>
                <div className="flex items-center gap-3">
                  <p className="font-mono text-sm font-bold text-black">{item.value}</p>
                  <span className={`text-xs font-semibold ${item.up === true ? "text-green-600" : item.up === false ? "text-red-400" : "text-neutral-400"}`}>
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-t border-neutral-100 px-4 py-2">
              <Link href="/markets" className="text-xs font-semibold text-black hover:text-neutral-600 transition">
                View full markets →
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">
            Upcoming Events
          </h2>
          <div className="space-y-3">
            {[
              { title: "Financial Crime Society Networking Night", date: "July 15, 2026", location: "Curtin Mauritius" },
              { title: "FinRisk Webinar: Understanding AML", date: "August 5, 2026", location: "Online" },
              { title: "MPC Meeting — Bank of Mauritius", date: "September 10, 2026", location: "Port Louis" },
            ].map((event, i) => (
              <div key={i} className="flex items-start gap-4 border border-neutral-200 bg-white p-4">
                <div className="border border-neutral-200 bg-neutral-50 p-2">
                  <Calendar size={13} className="text-black" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">{event.title}</p>
                  <p className="mt-0.5 text-xs text-neutral-400">{event.date} · {event.location}</p>
                </div>
              </div>
            ))}
            <Link href="/events" className="inline-flex items-center gap-1 text-xs font-semibold text-black hover:text-neutral-600 transition">
              View all events <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

      </div>

      <div className="border border-black bg-black p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} className="text-green-400" />
              <p className="font-bold text-white">Upgrade to Premium</p>
            </div>
            <p className="text-sm text-neutral-400">Get access to all research reports, premium analysis, and exclusive intelligence.</p>
          </div>
          <Link href="/research" className="shrink-0 inline-flex items-center gap-2 border border-white px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
            View Premium Research <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

    </div>
  );
}
