import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { News } from "@/types/news";

import NewsCard from "./news-card";

interface Props {
  news: News[];
}

export default function NewsPreviewMobile({ news }: Props) {
  return (
    <section className="mt-10">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#156CFF]
            "
          >
            LATEST NEWS
          </p>

          <h2
            className="
              mt-2
              text-2xl
              font-bold
              text-slate-900
            "
          >
            Insights & Updates
          </h2>
        </div>

        <Link
          href="/news"
          className="
            flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#156CFF]
          "
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* List */}

      <div className="space-y-4">
        {news.slice(0, 3).map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            slug={item.slug}
            thumbnail={item.thumbnail}
            publishedAt={item.published_at}
          />
        ))}
      </div>
    </section>
  );
}
