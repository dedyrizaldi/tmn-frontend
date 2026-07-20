"use client";

import { Copy, Link, Mail, Share2 } from "lucide-react";

import type { News } from "../types/news";

interface Props {
  news: News;
}

export default function NewsContent({ news }: Props) {
  return (
    <article>
      {/* Article Content */}

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

      {/* Tags */}

      {news.tags.length > 0 && (
        <div className="mt-12">
          <h3 className="mb-4 text-lg font-semibold text-[#04162E]">Tags</h3>

          <div className="flex flex-wrap gap-3">
            {news.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  bg-slate-100
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-700
                  transition-all

                  hover:bg-[#156CFF]
                  hover:text-white
                "
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

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
              <Link size={18} />
            </button>

            <button
              type="button"
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
            {news.author.name.charAt(0)}
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#04162E]">
              {news.author.name}
            </h3>

            {news.author.position && (
              <p className="mt-1 font-medium text-[#156CFF]">
                {news.author.position}
              </p>
            )}

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
