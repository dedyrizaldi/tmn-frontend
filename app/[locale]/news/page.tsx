import type { Metadata } from "next";

import Hero from "@/components/news/hero/hero";
import News from "@/components/news/news";

interface Props {
  params: Promise<{
    locale: string;
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

export default async function NewsPage() {
  return (
    <>
      <Hero />

      <News />
    </>
  );
}
