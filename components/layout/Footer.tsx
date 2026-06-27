import Link from "next/link";
import Image from "next/image";

const navigation = {
  platform: [
    { name: "Dashboard", href: "/" },
    { name: "Markets", href: "/markets" },
    { name: "Research", href: "/research" },
    { name: "Insights", href: "/insights" },
    { name: "Regulation", href: "/regulation" },
    { name: "Events", href: "/events" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Podcast", href: "/podcast" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Careers", href: "/careers" },
    { name: "Pricing", href: "/pricing" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
  sources: [
    { name: "Bank of Mauritius", href: "https://www.bom.mu" },
    { name: "FSC Mauritius", href: "https://www.fscmauritius.org" },
    { name: "FATF", href: "https://www.fatf-gafi.org" },
    { name: "SEM", href: "https://www.stockexchangeofmauritius.com" },
  ],
};

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="FinRisk Insights"
                width={120}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-neutral-500 leading-relaxed">
              Mauritius's emerging financial intelligence platform. Live markets, regulatory updates, research, and analysis — all in one place.
            </p>
            <div className="mt-6">
              
                href="https://www.linkedin.com/company/finrisk-insights"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-500 transition hover:border-black hover:text-black"
              >
                <LinkedInIcon />
                Follow on LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-black">Platform</p>
            <ul className="mt-4 space-y-3">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-neutral-500 transition hover:text-black">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-black">Company</p>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-neutral-500 transition hover:text-black">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-black">Data Sources</p>
            <ul className="mt-4 space-y-3">
              {navigation.sources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 transition hover:text-black">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-black">Legal</p>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-neutral-500 transition hover:text-black">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} FinRisk Insights. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Financial data is for informational purposes only and does not constitute investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
