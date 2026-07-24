"use client";

import { useCallback } from "react";

import { Copy, Link as LinkIcon, Mail, Share2 } from "lucide-react";

import type { News } from "@/types/news";

interface Props {
  news: News;
}

export default function NewsContent({ news }: Props) {
  const articleUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = useCallback(async () => {
    if (!articleUrl) return;

    await navigator.clipboard.writeText(articleUrl);
  }, [articleUrl]);

  const handleOpenLink = useCallback(() => {
    if (!articleUrl) return;

    window.open(articleUrl, "_blank");
  }, [articleUrl]);

  const handleShareEmail = useCallback(() => {
    if (!articleUrl) return;

    window.location.href = `mailto:?subject=${encodeURIComponent(
      news.title,
    )}&body=${encodeURIComponent(articleUrl)}`;
  }, [articleUrl, news.title]);

  const handleShare = useCallback(async () => {
    if (!articleUrl) return;

    if (navigator.share) {
      await navigator.share({
        title: news.title,
        text: news.excerpt,
        url: articleUrl,
      });

      return;
    }

    await navigator.clipboard.writeText(articleUrl);
  }, [articleUrl, news]);

  return (
    <article>
      {/* Article */}

      <div
        className="
          prose
          prose-lg
          max-w-none

          prose-headings:font-bold
          prose-headings:text-[#04162E]

          prose-p:leading-8
          prose-p:text-slate-700

          prose-a:text-[#156CFF]

          prose-img:rounded-2xl

          prose-strong:text-[#04162E]

          prose-blockquote:border-l-[#156CFF]
        "
        dangerouslySetInnerHTML={{
          __html: news.content,
        }}
      />

      {/* Share */}

      <div className="mt-12 border-t border-slate-200 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Share2 size={20} className="text-slate-500" />

            <span className="font-medium text-slate-700">
              Share this article
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleOpenLink}
              className="
                rounded-xl
                border
                border-slate-200
                p-3
                text-slate-600
                transition-all

                hover:border-[#156CFF]
                hover:text-[#156CFF]
              "
            >
              <LinkIcon size={18} />
            </button>

            <button
              type="button"
              onClick={handleCopyLink}
              className="
                rounded-xl
                border
                border-slate-200
                p-3
                text-slate-600
                transition-all

                hover:border-[#156CFF]
                hover:text-[#156CFF]
              "
            >
              <Copy size={18} />
            </button>

            <button
              type="button"
              onClick={handleShareEmail}
              className="
                rounded-xl
                border
                border-slate-200
                p-3
                text-slate-600
                transition-all

                hover:border-[#156CFF]
                hover:text-[#156CFF]
              "
            >
              <Mail size={18} />
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="
                rounded-xl
                border
                border-slate-200
                p-3
                text-slate-600
                transition-all

                hover:border-[#156CFF]
                hover:text-[#156CFF]
              "
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Author */}

      <div
        className="
          mt-12
          rounded-3xl
          border
          border-slate-200
          bg-slate-50
          p-8
        "
      >
        <div className="flex items-start gap-5">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-[#156CFF]
              text-xl
              font-bold
              text-white
            "
          >
            {news.author.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#04162E]">{news.author}</h3>

            <p className="mt-4 leading-7 text-slate-600">
              PT Tirta Mega Nusantara Editorial Team delivers insights on
              industrial services, engineering innovation, tank cleaning,
              refinery maintenance, equipment solutions, and company
              developments.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
