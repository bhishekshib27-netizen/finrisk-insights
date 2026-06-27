import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.finriskinsight.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/markets`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/regulation`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/research`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/podcast`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/insights/semdex-closes-higher-banking-performance`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights/aml-developments-compliance-officers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights/inflation-figures-mauritius`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
