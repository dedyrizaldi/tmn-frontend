import type { News } from "../types/news";
import NewsCard from "./news-card";

interface Props {
  news: News[];
}

export default function NewsGrid({ news }: Props) {
  if (news.length === 0) {
    return (
      <section className="py-16">
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            rounded-3xl
            border
            border-dashed
            border-slate-300
            bg-slate-50
            px-8
            py-20
            text-center
          "
        >
          <h3 className="text-2xl font-bold text-slate-800">
            No Articles Found
          </h3>

          <p className="mt-3 max-w-md text-slate-500">
            We couldn&apos;t find any articles matching your search or selected
            category. Please try another keyword.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div
        className="
          grid
          gap-8

          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </section>
  );
}
