import NewsHeader from "./news-header";
import NewsGrid from "./news-grid";
import NewsGridMobile from "./news-grid-mobile";

export default function NewsPreview() {
  return (
    <>
      {/* Desktop */}

      <div className="hidden lg:block">
        <NewsHeader />
        <NewsGrid />
      </div>

      {/* Mobile */}

      <div className="lg:hidden">
        <NewsHeader />
        <NewsGridMobile />
      </div>
    </>
  );
}
