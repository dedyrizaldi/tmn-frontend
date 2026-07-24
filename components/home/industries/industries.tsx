import Container from "@/components/common/container/container";

import type { News } from "@/types/news";

import IndustriesHeader from "./industries-header";
import IndustriesGrid from "./industries-grid";
import IndustriesGridMobile from "./industries-grid-mobile";

import NewsPreview from "../news/news-preview";
import NewsPreviewMobile from "../news/news-preview-mobile";

interface Props {
  latestNews: News[];
}

export default function Industries({ latestNews }: Props) {
  return (
    <section className="py-8">
      <Container className="max-w-[1180px]">
        {/* ================= DESKTOP ================= */}

        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
          {/* LEFT */}

          <div className="lg:col-span-5">
            <IndustriesHeader />

            <IndustriesGrid />
          </div>

          {/* Divider */}

          <div className="flex justify-center lg:col-span-1">
            <div className="w-px bg-slate-200" />
          </div>

          {/* RIGHT */}

          <div className="lg:col-span-6">
            <NewsPreview news={latestNews} />
          </div>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="lg:hidden">
          <IndustriesHeader />

          <IndustriesGridMobile />

          <div className="mt-10">
            <NewsPreviewMobile news={latestNews} />
          </div>
        </div>
      </Container>
    </section>
  );
}
