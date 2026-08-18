import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const locales = ["id", "en"] as const;

const routes = [
  {
    path: "",
    priority: 1,
  },
  {
    path: "/about",
    priority: 0.9,
  },
  {
    path: "/services",
    priority: 0.9,
  },
  {
    path: "/equipment",
    priority: 0.8,
  },
  {
    path: "/projects",
    priority: 0.8,
  },
  {
    path: "/qhse",
    priority: 0.8,
  },
  {
    path: "/contact",
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.url}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route.priority,
    })),
  );
}
