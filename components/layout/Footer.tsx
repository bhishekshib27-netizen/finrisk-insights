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

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
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
            <div className="mt-6 flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="border border-neutral-200 p-2 text-neutral-400 transition hover:border-black hover:text-black">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="border border-neutral-200 p-2 text-neutral-400 transition hover:border-black hover:text-black">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border border-neutral-200 p-2 text-neutral-400 transition hover:border-black hover:text-black">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform */}
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

          {/* Company */}
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

          {/* Sources */}
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

      {/* Bottom Bar */}
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
