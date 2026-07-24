import type { Metadata } from "next";

import Hero from "@/components/news/hero/hero";
import News from "@/components/news/news";

import { getNews, getNewsCategories } from "@/services/news.service";

interface Props {
  params: Promise<{
    locale: string;
  }>;

  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isIndonesia = locale === "id";

  return {
    title: isIndonesia
      ? "Berita & Insight | PT Tirta Mega Nusantara"
      : "News & Insights | PT Tirta Mega Nusantara",

    description: isIndonesia
      ? "Temukan berita terbaru, proyek, teknologi, dan perkembangan PT Tirta Mega Nusantara."
      : "Discover the latest news, projects, technology, and company updates from PT Tirta Mega Nusantara.",

    keywords: [
      "TMN",
      "PT Tirta Mega Nusantara",
      "News",
      "Industrial News",
      "Tank Cleaning",
      "Industrial Maintenance",
      "Technology",
      "Projects",
    ],

    openGraph: {
      title: isIndonesia
        ? "Berita & Insight | PT Tirta Mega Nusantara"
        : "News & Insights | PT Tirta Mega Nusantara",

      description: isIndonesia
        ? "Temukan berita terbaru PT Tirta Mega Nusantara."
        : "Latest updates from PT Tirta Mega Nusantara.",

      type: "website",

      url: "/news",
    },
  };
}

export default async function NewsPage({ searchParams }: Props) {
  const { page, search, category } = await searchParams;

  const [newsResponse, categories] = await Promise.all([
    getNews({
      page: Number(page) || 1,
      search,
      category,
    }),
    getNewsCategories(),
  ]);

  return (
    <>
      <Hero />

      <News
        news={newsResponse.data}
        meta={newsResponse.meta}
        categories={categories}
        search={search ?? ""}
        category={category ?? ""}
      />
    </>
  );
}
