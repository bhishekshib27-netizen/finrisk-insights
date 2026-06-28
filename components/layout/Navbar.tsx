"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import SearchModal from "@/components/search/SearchModal";
import NotificationBell from "@/components/layout/NotificationBell";
import NewsletterModal from "@/components/newsletter/NewsletterModal";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Markets", href: "/markets" },
  { name: "Regulation", href: "/regulation" },
  { name: "Events", href: "/events" },
  { name: "Podcast", href: "/podcast" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="FinRisk Insights"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
            <nav className="hidden gap-6 lg:flex">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition ${
                    isActive(link.href)
                      ? "text-black"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-[21px] left-0 h-0.5 w-full bg-blue-900" />
                  )}
                </Link>
              ))}
              <button
                onClick={() => setNewsletterOpen(true)}
                className="relative text-sm font-medium text-neutral-500 transition hover:text-black"
              >
                Newsletter
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <SearchModal />
              <NotificationBell />
              {isSignedIn ? (
                <div className="flex items-center gap-3">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-1.5 border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-black hover:text-black"
                  >
                    <LayoutDashboard size={13} />
                    My Dashboard
                  </Link>
                  <UserButton />
                </div>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <button className="text-sm font-medium text-neutral-500 hover:text-black transition">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="bg-blue-900 px-4 py-1.5 text-sm font-semibold text-white hover:bg-neutral-800 transition">
                      Get Access
                    </button>
                  </SignUpButton>
                </>
              )}
            </div>

            {isSignedIn && (
              <div className="md:hidden flex items-center gap-2">
                <Link href="/dashboard" className="border border-neutral-200 p-1.5">
                  <LayoutDashboard size={16} className="text-neutral-600" />
                </Link>
                <UserButton />
              </div>
            )}

            <button
              className="lg:hidden p-2 text-neutral-500 hover:bg-neutral-100 transition"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-neutral-200 bg-white px-6 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-neutral-50 text-black font-semibold border-l-2 border-black"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => { setMobileOpen(false); setNewsletterOpen(true); }}
                className="px-3 py-2.5 text-left text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 hover:text-black"
              >
                Newsletter
              </button>
              {isSignedIn && (
                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium transition ${
                    isActive("/dashboard")
                      ? "bg-neutral-50 text-black font-semibold border-l-2 border-black"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-black"
                  }`}
                >
                  My Dashboard
                </Link>
              )}
            </nav>

            {!isSignedIn && (
              <div className="mt-4 flex flex-col gap-3 border-t border-neutral-100 pt-4">
                <SignInButton mode="modal">
                  <button className="w-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition">
                    Get Access
                  </button>
                </SignUpButton>
              </div>
            )}

            <div className="mt-4">
              <NotificationBell />
            </div>
          </div>
        )}
      </header>

      <NewsletterModal
        open={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />
    </>
  );
}
