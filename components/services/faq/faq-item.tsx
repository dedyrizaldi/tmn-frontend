"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:border-[#156CFF]
        hover:shadow-md
      "
    >
      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-4
          text-left
        "
      >
        <h3
          className="
            flex-1

            text-[15px]

            font-semibold

            leading-6

            text-[#04162E]

            lg:text-[16px]
          "
        >
          {question}
        </h3>

        <div
          className={`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300

            ${
              open
                ? "bg-[#156CFF] text-white"
                : "bg-[#156CFF]/10 text-[#156CFF]"
            }
          `}
        >
          {open ? (
            <Minus size={16} className="transition-transform duration-300" />
          ) : (
            <Plus size={16} className="transition-transform duration-300" />
          )}
        </div>
      </button>

      {/* Body */}

      <div
        className={`
          grid
          overflow-hidden
          transition-all
          duration-500

          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <p
            className="
              px-5
              pb-5

              text-[14px]

              leading-7

              text-slate-600

              lg:text-[15px]
            "
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
