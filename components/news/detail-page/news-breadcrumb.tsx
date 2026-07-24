import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import type { News } from "@/types/news";

interface Props {
  news: News;
}

export default function NewsBreadcrumb({ news }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm"
    >
      <Link
        href="/"
        className="
          inline-flex
          items-center
          gap-2
          text-slate-500
          transition-colors
          hover:text-[#156CFF]
        "
      >
        <Home size={16} />
        Home
      </Link>

      <ChevronRight size={16} className="text-slate-400" />

      <Link
        href="/news"
        className="
          text-slate-500
          transition-colors
          hover:text-[#156CFF]
        "
      >
        News
      </Link>

      <ChevronRight size={16} className="text-slate-400" />

      <span
        className="
          rounded-full
          bg-blue-50
          px-3
          py-1
          text-xs
          font-semibold
          text-[#156CFF]
        "
      >
        {news.category.name}
      </span>

      <ChevronRight size={16} className="text-slate-400" />

      <span
        className="
          max-w-md
          truncate
          font-medium
          text-slate-700
        "
        title={news.title}
      >
        {news.title}
      </span>
    </nav>
  );
}
