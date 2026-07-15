import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

import { news } from "./news.data";
import NewsCard from "./news-card";

export default function NewsPreviewMobile() {
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
          <NewsCard key={item.slug} {...item} />
        ))}
      </div>
    </section>
  );
}
