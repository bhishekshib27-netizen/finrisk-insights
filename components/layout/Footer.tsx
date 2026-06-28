import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-8 sm:px-12 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          
          <Link href="/">
            <Image src="/logo.png" alt="FinRisk Insights" width={36} height={36} className="h-9 w-auto object-contain" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
            <Link href="/markets" className="hover:text-black transition">Markets</Link>
            <Link href="/insights" className="hover:text-black transition">Insights</Link>
            <Link href="/careers" className="hover:text-black transition">Careers</Link>
            <Link href="/newsletter" className="hover:text-black transition">Newsletter</Link>
            <a href="https://www.linkedin.com/company/finrisk-insights" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">LinkedIn</a>
          </div>

          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} FinRisk Insights</p>

        </div>
        <p className="mt-4 text-center text-xs text-neutral-300">
          Financial data is for informational purposes only and does not constitute investment advice.
        </p>
      </div>
    </footer>
  );
}
