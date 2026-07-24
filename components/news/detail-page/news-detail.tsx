"use client";

import Container from "@/components/common/container/container";

import type { News } from "@/types/news";

import NewsBreadcrumb from "./news-breadcrumb";
import NewsContent from "./news-content";
import NewsHero from "./news-hero";
import RelatedNews from "./related-news";

interface Props {
  news: News;
  relatedNews: News[];
}

export default function NewsDetail({ news, relatedNews }: Props) {
  return (
    <>
      {/* Hero */}

      <NewsHero news={news} />

      {/* Content */}

      <Container className="py-16">
        <NewsBreadcrumb news={news} />

        <div className="mx-auto mt-10 max-w-4xl">
          <NewsContent news={news} />
        </div>

        {/* Related News */}

        <RelatedNews news={relatedNews} />
      </Container>
    </>
  );
}
