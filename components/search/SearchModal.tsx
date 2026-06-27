"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, FileText, BarChart2, BookOpen, Shield, Calendar, LayoutDashboard } from "lucide-react";
import { searchItems } from "@/lib/data/search";
import { motion, AnimatePresence } from "framer-motion";

const categoryIcons: Record<string, React.ReactNode> = {
  Pages: <LayoutDashboard size={14} />,
  Markets: <BarChart2 size={14} />,
  Research: <BookOpen size={14} />,
  Regulation: <Shield size={14} />,
  Events: <Calendar size={14} />,
};

const categories = ["Pages", "Markets", "Research", "Regulation", "Events"];

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // ⌘K or Ctrl+K to open
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const filtered = searchItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-500 transition hover:border-cyan-300 hover:text-cyan-600 md:flex"
      >
        <Search size={14} />
        <span>Search...</span>
        <kbd className="ml-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-slate-500">
          ⌘K
        </kbd>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.15 }}
              className="fixed left-1/2 top-24 z-50 w-full max-w-lg -translate-x-1/2"
            >
              <Command
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                shouldFilter={false}
              >
                {/* Search Input */}
                <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
                  <Search size={16} className="text-slate-400" />
                  <Command.Input
                    value={query}
                    onValueChange={setQuery}
                    placeholder="Search markets, research, regulation..."
                    className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                    autoFocus
                  />
                  <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-400">
                    ESC
                  </kbd>
                </div>

                {/* Results */}
                <Command.List className="max-h-96 overflow-y-auto p-2">
                  {filtered.length === 0 && (
                    <Command.Empty className="py-8 text-center text-sm text-slate-400">
                      No results for &quot;{query}&quot;
                    </Command.Empty>
                  )}

                  {categories.map((cat) => {
                    const items = filtered.filter((i) => i.category === cat);
                    if (items.length === 0) return null;

                    return (
                      <Command.Group key={cat} heading={cat}>
                        <div className="mb-1 mt-3 px-2 text-xs font-semibold text-slate-400">
                          {cat}
                        </div>

                        {items.map((item) => (
                          <Command.Item
                            key={item.id}
                            onSelect={() => handleSelect(item.href)}
                            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700 aria-selected:bg-cyan-50 aria-selected:text-cyan-700"
                          >
                            <span className="text-slate-400">
                              {categoryIcons[item.category]}
                            </span>
                            {item.title}
                          </Command.Item>
                        ))}
                      </Command.Group>
                    );
                  })}
                </Command.List>

                {/* Footer */}
                <div className="flex items-center gap-4 border-t border-slate-100 px-4 py-2 text-xs text-slate-400">
                  <span>↑↓ navigate</span>
                  <span>↵ select</span>
                  <span>ESC close</span>
                </div>
              </Command>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}