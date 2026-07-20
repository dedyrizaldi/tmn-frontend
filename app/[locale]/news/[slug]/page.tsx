import { notFound } from "next/navigation";

import NewsDetail from "@/components/news/detail-page/news-detail";
import { NEWS_DATA } from "@/components/news/news.data";

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const news = NEWS_DATA.find((item) => item.slug === slug);

  if (!news) {
    return {
      title: "News Not Found",
    };
  }

  return {
    title: news.seo.metaTitle,
    description: news.seo.metaDescription,
    keywords: news.seo.keywords,
    openGraph: {
      title: news.seo.metaTitle,
      description: news.seo.metaDescription,
      images: [news.banner || news.thumbnail],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  const news = NEWS_DATA.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  const relatedNews = NEWS_DATA.filter(
    (item) => item.id !== news.id && item.category === news.category,
  ).slice(0, 3);

  return <NewsDetail news={news} relatedNews={relatedNews} />;
}

export async function generateStaticParams() {
  return NEWS_DATA.map((news) => ({
    slug: news.slug,
  }));
}
