import type { Metadata } from "next";
import { notFound } from "next/navigation";

import NewsDetail from "@/components/news/detail-page/news-detail";

import { getNews, getNewsBySlug } from "@/services/news.service";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const news = await getNewsBySlug(slug);

    return {
      title: news.meta_title || news.title,
      description: news.meta_description || news.excerpt,
      keywords: [
        news.title,
        news.category.name,
        "PT Tirta Mega Nusantara",
        "TMN",
      ],
      openGraph: {
        title: news.meta_title || news.title,
        description: news.meta_description || news.excerpt,
        type: "article",
        images: news.thumbnail ? [news.thumbnail] : [],
      },
    };
  } catch {
    return {
      title: "News Not Found",
    };
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  let news;

  try {
    news = await getNewsBySlug(slug);
  } catch {
    notFound();
  }

  const response = await getNews({
    category: news.category.slug,
  });

  const relatedNews = response.data
    .filter((item) => item.id !== news.id)
    .slice(0, 3);

  return <NewsDetail news={news} relatedNews={relatedNews} />;
}
