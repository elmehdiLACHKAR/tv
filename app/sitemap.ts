import type { MetadataRoute } from "next";

const baseUrl = "https://streamnova.example";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/products", "/checkout", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
