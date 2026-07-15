import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export function createMetadata(title?: string, description?: string): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.name,

    description: description ?? siteConfig.description,

    keywords: siteConfig.keywords,

    metadataBase: new URL(siteConfig.url),

    alternates: {
      canonical: "/",
    },

    openGraph: {
      title,
      description,

      url: siteConfig.url,

      siteName: siteConfig.name,

      locale: "id_ID",

      type: "website",

      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [siteConfig.ogImage],
    },
  };
}
