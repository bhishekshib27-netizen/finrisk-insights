export type UpcomingEvent = {
  date: string;
  day: string;
  month: string;
  title: string;
  org: string;
  type: string;
  location: string;
  desc: string;
  url: string;
};

const upcomingEvents: UpcomingEvent[] = [
  {
    date: "12 Aug 2026",
    day: "12",
    month: "AUG",
    title: "79th MPC Meeting — Bank of Mauritius",
    org: "Bank of Mauritius",
    type: "Monetary Policy",
    location: "Port Louis",
    desc: "The Monetary Policy Committee will convene to assess domestic and global economic developments and determine the appropriate monetary policy stance.",
    url: "https://www.bom.mu/monetary-policy/monetary-policy-committee/meetings",
  },
];

export function getUpcomingEvents(): UpcomingEvent[] {
  return upcomingEvents;
}
