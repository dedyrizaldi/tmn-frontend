import type { News } from "@/types/news";

import NewsHeader from "./news-header";
import NewsGrid from "./news-grid";
import NewsGridMobile from "./news-grid-mobile";

interface Props {
  news: News[];
}

export default function NewsPreview({ news }: Props) {
  return (
    <>
      <div className="hidden lg:block">
        <NewsHeader />
        <NewsGrid news={news} />
      </div>

      <div className="lg:hidden">
        <NewsHeader />
        <NewsGridMobile news={news} />
      </div>
    </>
  );
}
