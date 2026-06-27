"use client";

import { useState } from "react";
import { Bell, X, ExternalLink } from "lucide-react";

const notifications = [
  { id: "1", title: "FSC issues updated AML/CFT guidance", time: "2 hours ago", url: "https://www.fscmauritius.org", unread: true },
  { id: "2", title: "USD/MUR rate moved above 45.20", time: "4 hours ago", url: "/markets", unread: true },
  { id: "3", title: "New FinRisk report: Banking Outlook 2026", time: "1 day ago", url: "/research", unread: true },
  { id: "4", title: "MPC Meeting scheduled for September 2026", time: "2 days ago", url: "/events", unread: false },
  { id: "5", title: "FATF grey list update published", time: "3 days ago", url: "/regulation", unread: false },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState<string[]>([]);

  const unreadCount = notifications.filter((n) => n.unread && !read.includes(n.id)).length;
  const markAllRead = () => setRead(notifications.map((n) => n.id));

  return (
    <div className="relative">
      <button onClick={() => setOpen((prev) => !prev)} className="relative text-neutral-400 hover:text-black transition">
        <Bell size={18} />
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center bg-black text-white text-xs font-bold">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-8 z-50 w-80 border border-neutral-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
              <p className="text-sm font-bold text-black">Notifications</p>
              <div className="flex items-center gap-3">
                <button onClick={markAllRead} className="text-xs text-neutral-400 hover:text-black transition">Mark all read</button>
                <button onClick={() => setOpen(false)}>
                  <X size={14} className="text-neutral-400 hover:text-black transition" />
                </button>
              </div>
            </div>

            <div className="max-h-80 overflow-y-auto">
              {notifications.map((n) => {
                const isUnread = n.unread && !read.includes(n.id);
                return (
                  <a key={n.id} href={n.url} onClick={() => setRead((prev) => [...prev, n.id])} className={`flex items-start gap-3 border-b border-neutral-100 px-4 py-3 transition hover:bg-neutral-50 ${isUnread ? "bg-neutral-50" : "bg-white"}`}>
                    <div className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isUnread ? "bg-black" : "bg-transparent"}`} />
                    <div className="flex-1">
                      <p className={`text-xs leading-snug ${isUnread ? "font-semibold text-black" : "text-neutral-500"}`}>{n.title}</p>
                      <p className="mt-0.5 text-xs text-neutral-400">{n.time}</p>
                    </div>
                    <ExternalLink size={11} className="mt-1 shrink-0 text-neutral-300" />
                  </a>
                );
              })}
            </div>

            <div className="border-t border-neutral-100 px-4 py-2">
              <a href="/regulation" className="text-xs font-medium text-black hover:text-neutral-600 transition">View all alerts</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
