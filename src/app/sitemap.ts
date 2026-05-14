import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thecyberloom.com",
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: "https://thecyberloom.com/services",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://thecyberloom.com/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}