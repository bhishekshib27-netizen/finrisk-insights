"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/markets", label: "Markets" },
  { href: "/research", label: "Research" },
  { href: "/insights", label: "Insights" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/careers", label: "Careers" },
];

export default function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm transition-colors ${
            pathname === link.href
              ? "font-semibold text-cyan-400"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}