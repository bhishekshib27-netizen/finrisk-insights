import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-8 sm:px-12 py-10">
        
        {/* Logo + Wordmark */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="FinRisk Insights" width={52} height={52} className="h-14 w-auto object-contain" />
            <div>
              <p className="text-xl font-bold text-black tracking-tight">FinRisk Insights</p>
              <p className="text-xs text-neutral-400 tracking-widest uppercase">finriskinsight.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
            <Link href="/markets" className="hover:text-black transition">Markets</Link>
            <Link href="/insights" className="hover:text-black transition">Insights</Link>
            <Link href="/careers" className="hover:text-black transition">Careers</Link>
            <Link href="/newsletter" className="hover:text-black transition">Newsletter</Link>
            <Link href="/contact" className="hover:text-black transition">Contact</Link>
            <Link href="/press" className="hover:text-black transition">Press</Link>
            <a href="https://www.linkedin.com/company/finrisk-insights" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">LinkedIn</a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 border-t border-neutral-100 pt-6 flex flex-col gap-1 sm:flex-row sm:justify-between">
          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} FinRisk Insights. All rights reserved.</p>
          <p className="text-xs text-neutral-300">Financial data is for informational purposes only and does not constitute investment advice.</p>
        </div>

      </div>
    </footer>
  );
}
