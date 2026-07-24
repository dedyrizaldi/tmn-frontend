"use client";

import { Newspaper, Search } from "lucide-react";

import Container from "@/components/common/container/container";

export default function HeroContent() {
  return (
    <Container>
      <div
        className="
          flex
          min-h-[420px]
          flex-col
          items-center
          justify-center
          py-24
          text-center
        "
      >
        <div
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-2
            text-sm
            font-medium
            text-white
            backdrop-blur
          "
        >
          <Newspaper size={18} />
          Company News
        </div>

        <h1
          className="
            max-w-4xl
            text-4xl
            font-bold
            leading-tight
            text-white

            md:text-6xl
          "
        >
          News &<span className="text-[#58A6FF]"> Insights</span>
        </h1>

        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-blue-100
          "
        >
          Stay informed with the latest company updates, industrial projects,
          technology innovations, and insights from{" "}
          <b>PT Tirta Mega Nusantara.</b>
        </p>

        {/* Search */}

        {/* <div className="mt-12 w-full max-w-xl">
          <div className="relative">
            <Search
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search news..."
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/20
                bg-white
                pl-14
                pr-5
                text-slate-700
                outline-none
                transition

                focus:border-[#156CFF]
                focus:ring-4
                focus:ring-[#156CFF]/20
              "
            />
          </div>
        </div> */}
      </div>
    </Container>
  );
}
