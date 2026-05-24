import { MetadataRoute } from "next";
import { servicesData } from "../config/servicesData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://thecyberloom.com";

  // Static pages
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/project",
    "/support",
    "/book",
    "/contact",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic service pages
  const serviceUrls = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticUrls, ...serviceUrls];
}