import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://finriskinsights.mu", lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: "https://finriskinsights.mu/markets", lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: "https://finriskinsights.mu/insights", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://finriskinsights.mu/research", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://finriskinsights.mu/regulation", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://finriskinsights.mu/events", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];
}