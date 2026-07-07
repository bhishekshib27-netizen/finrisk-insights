import { getAllRegulatoryUpdates } from "@/lib/api/regulatory";
import { getAllPosts } from "@/lib/sanity/queries";
import { getUpcomingEvents } from "@/lib/data/events";

export type Notification = {
  id: string;
  title: string;
  url: string;
  timestamp: number;
  time: string;
};

function timeAgo(timestamp: number): string {
  const now = Date.now();
  const diffMs = now - timestamp;
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHr = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHr / 24);

  if (diffMs < 0) {
    const futureDay = Math.round(-diffMs / (1000 * 60 * 60 * 24));
    if (futureDay <= 0) return "today";
    if (futureDay === 1) return "tomorrow";
    return `in ${futureDay} days`;
  }

  if (diffSec < 60) return "just now";
  if (diffMin < 60) return `${diffMin} min${diffMin === 1 ? "" : "s"} ago`;
  if (diffHr < 24) return `${diffHr} hour${diffHr === 1 ? "" : "s"} ago`;
  if (diffDay < 7) return `${diffDay} day${diffDay === 1 ? "" : "s"} ago`;
  return new Date(timestamp).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

function parseFlexibleDate(dateStr: string): number {
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? Date.now() : parsed.getTime();
}

export async function getNotifications(): Promise<Notification[]> {
  const [regulatory, posts, events] = await Promise.all([
    getAllRegulatoryUpdates(),
    getAllPosts(),
    Promise.resolve(getUpcomingEvents()),
  ]);

  const regulatoryNotifications: Notification[] = regulatory.slice(0, 3).map((item) => {
    const ts = parseFlexibleDate(item.date);
    return {
      id: `reg-${item.id}`,
      title: item.title,
      url: item.url,
      timestamp: ts,
      time: timeAgo(ts),
    };
  });

  const insightNotifications: Notification[] = posts.slice(0, 3).map((post) => {
    const ts = parseFlexibleDate(post.publishedAt || (post as any)._createdAt);
    return {
      id: `post-${post._id}`,
      title: post.title,
      url: `/insights/${post.slug.current}`,
      timestamp: ts,
      time: timeAgo(ts),
    };
  });

  const eventNotifications: Notification[] = events.slice(0, 2).map((event, i) => {
    const ts = parseFlexibleDate(event.date);
    return {
      id: `event-${i}`,
      title: event.title,
      url: "/events",
      timestamp: ts,
      time: timeAgo(ts),
    };
  });

  return [...regulatoryNotifications, ...insightNotifications, ...eventNotifications]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 8);
}
