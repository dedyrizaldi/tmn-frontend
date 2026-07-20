import type { News } from "./types/news";

export const NEWS_DATA: News[] = [
  {
    id: 1,
    slug: "tmn-completes-tank-cleaning-project-at-oil-terminal",
    title:
      "TMN Successfully Completed Tank Cleaning Project at Major Oil Terminal",
    excerpt:
      "PT Tirta Mega Nusantara successfully completed a large-scale tank cleaning project with zero incidents and on schedule.",
    content: `
TMN successfully completed a comprehensive tank cleaning project at one of Indonesia's largest oil terminals.

The project included sludge removal, gas freeing, internal cleaning, waste handling, and final inspection.

All work was completed under strict QHSE standards and delivered on schedule without any lost time incidents.
`,
    thumbnail: "/images/news/news-1.png",
    banner: "/images/news/news-banner-1.png",
    category: "Project",
    tags: ["Tank Cleaning", "Oil Terminal", "Project"],
    author: {
      id: 1,
      name: "TMN Editorial Team",
      position: "Corporate Communication",
    },
    publishedAt: "2026-07-20",
    readingTime: 5,
    featured: true,
    views: 245,
    gallery: [],
    seo: {
      metaTitle: "TMN Successfully Completed Tank Cleaning Project",
      metaDescription:
        "TMN completed a major tank cleaning project safely and efficiently.",
      keywords: ["tank cleaning", "oil terminal", "TMN"],
    },
  },

  {
    id: 2,
    slug: "new-industrial-pumping-system-launched",
    title: "TMN Launches High Capacity Industrial Pumping System",
    excerpt:
      "New pumping system designed to improve operational efficiency for industrial facilities.",
    content: `
TMN officially introduced its latest industrial pumping solution for refinery and storage terminal operations.

The system delivers higher capacity with lower operational downtime.
`,
    thumbnail: "/images/news/news-2.png",
    banner: "/images/news/news-banner-2.png",
    category: "Equipment",
    tags: ["Pump", "Equipment"],
    author: {
      id: 1,
      name: "TMN Editorial Team",
    },
    publishedAt: "2026-07-18",
    readingTime: 4,
    featured: false,
    views: 172,
    gallery: [],
    seo: {
      metaTitle: "Industrial Pumping System",
      metaDescription: "Latest industrial pumping equipment.",
      keywords: ["pump", "equipment"],
    },
  },

  {
    id: 3,
    slug: "safety-first-zero-lti-achievement",
    title: "TMN Achieves 1 Million Safe Working Hours Without LTI",
    excerpt:
      "Commitment to safety remains our highest priority across every project.",
    content: `
TMN has reached an important safety milestone by achieving one million safe working hours without Lost Time Injury.

This achievement reflects the company's strong QHSE culture.
`,
    thumbnail: "/images/news/news-3.png",
    banner: "/images/news/news-banner-3.png",
    category: "Company",
    tags: ["QHSE", "Safety"],
    author: {
      id: 2,
      name: "Corporate Communication",
    },
    publishedAt: "2026-07-15",
    readingTime: 3,
    featured: false,
    views: 194,
    gallery: [],
    seo: {
      metaTitle: "Safety Achievement",
      metaDescription: "One million safe working hours.",
      keywords: ["QHSE", "Safety"],
    },
  },

  {
    id: 4,
    slug: "advanced-sludge-removal-technology",
    title: "Advanced Sludge Removal Technology Improves Efficiency",
    excerpt:
      "TMN adopts advanced sludge removal technology for refinery maintenance.",
    content: "",
    thumbnail: "/images/news/news-4.png",
    banner: "/images/news/news-banner-4.png",
    category: "Technology",
    tags: ["Technology"],
    author: {
      id: 1,
      name: "TMN Editorial Team",
    },
    publishedAt: "2026-07-12",
    readingTime: 4,
    featured: false,
    views: 126,
    gallery: [],
    seo: {
      metaTitle: "Sludge Removal Technology",
      metaDescription: "Latest sludge removal technology.",
      keywords: ["technology"],
    },
  },

  {
    id: 5,
    slug: "csr-tree-planting-program",
    title: "TMN Conducts Tree Planting Program Around Operational Area",
    excerpt:
      "Environmental sustainability remains an integral part of TMN's business strategy.",
    content: "",
    thumbnail: "/images/news/news-5.png",
    banner: "/images/news/news-banner-5.png",
    category: "CSR",
    tags: ["CSR"],
    author: {
      id: 3,
      name: "CSR Team",
    },
    publishedAt: "2026-07-10",
    readingTime: 3,
    featured: false,
    views: 94,
    gallery: [],
    seo: {
      metaTitle: "CSR Program",
      metaDescription: "Tree planting program.",
      keywords: ["csr"],
    },
  },

  {
    id: 6,
    slug: "refinery-maintenance-support",
    title: "Supporting Annual Refinery Maintenance Shutdown",
    excerpt:
      "TMN deployed integrated manpower and equipment for refinery shutdown activities.",
    content: "",
    thumbnail: "/images/news/news-6.png",
    banner: "/images/news/news-banner-6.png",
    category: "Project",
    tags: ["Refinery"],
    author: {
      id: 1,
      name: "TMN Editorial Team",
    },
    publishedAt: "2026-07-08",
    readingTime: 5,
    featured: false,
    views: 140,
    gallery: [],
    seo: {
      metaTitle: "Refinery Maintenance",
      metaDescription: "Annual refinery maintenance support.",
      keywords: ["refinery"],
    },
  },

  {
    id: 7,
    slug: "industrial-cleaning-best-practice",
    title: "Best Practices for Industrial Tank Cleaning Operations",
    excerpt:
      "Understanding the importance of safety and efficiency during tank cleaning.",
    content: "",
    thumbnail: "/images/news/news-7.png",
    banner: "/images/news/news-banner-7.png",
    category: "Technology",
    tags: ["Tank Cleaning"],
    author: {
      id: 2,
      name: "Engineering Team",
    },
    publishedAt: "2026-07-05",
    readingTime: 6,
    featured: false,
    views: 132,
    gallery: [],
    seo: {
      metaTitle: "Tank Cleaning Guide",
      metaDescription: "Best practices for industrial cleaning.",
      keywords: ["tank cleaning"],
    },
  },

  {
    id: 8,
    slug: "tmn-expands-equipment-fleet",
    title: "TMN Expands Fleet with New Industrial Equipment",
    excerpt: "Additional equipment improves project response time nationwide.",
    content: "",
    thumbnail: "/images/news/news-8.png",
    banner: "/images/news/news-banner-8.png",
    category: "Equipment",
    tags: ["Equipment"],
    author: {
      id: 1,
      name: "TMN Editorial Team",
    },
    publishedAt: "2026-07-02",
    readingTime: 4,
    featured: false,
    views: 160,
    gallery: [],
    seo: {
      metaTitle: "Equipment Expansion",
      metaDescription: "TMN expands industrial equipment fleet.",
      keywords: ["equipment"],
    },
  },
];
