"use client";

import { useState, useEffect } from "react";
import { Bell, X, ExternalLink } from "lucide-react";
import type { Notification } from "@/lib/notifications";

const READ_STORAGE_KEY = "finrisk-notifications-read";

export default function NotificationBell({ notifications }: { notifications: Notification[] }) {
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(READ_STORAGE_KEY);
      if (stored) setRead(JSON.parse(stored));
    } catch {
      // localStorage unavailable, fall back to in-memory only
    }
    setHydrated(true);
  }, []);

  const persistRead = (ids: string[]) => {
    setRead(ids);
    try {
      localStorage.setItem(READ_STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // ignore
    }
  };

  const unreadCount = hydrated ? notifications.filter((n) => !read.includes(n.id)).length : 0;
  const markAllRead = () => persistRead(notifications.map((n) => n.id));
  const markRead = (id: string) => persistRead([...read, id]);

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
              {notifications.length === 0 && (
                <p className="px-4 py-6 text-center text-xs text-neutral-400">No notifications yet.</p>
              )}
              {notifications.map((n) => {
                const isUnread = hydrated && !read.includes(n.id);
                return (
                  <a key={n.id} href={n.url} target={n.url.startsWith("http") ? "_blank" : undefined} rel={n.url.startsWith("http") ? "noopener noreferrer" : undefined} onClick={() => markRead(n.id)} className={`flex items-start gap-3 border-b border-neutral-100 px-4 py-3 transition hover:bg-neutral-50 ${isUnread ? "bg-neutral-50" : "bg-white"}`}>
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
