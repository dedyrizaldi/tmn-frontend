"use client";

import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";

interface Props {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}

export default function FAQItem({ question, answer, open, onClick }: Props) {
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
        hover:border-[#156CFF]/40
      "
    >
      <button
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-5
          p-6
          text-left
        "
      >
        <h3
          className="
            text-lg
            font-semibold
            text-[#04162E]
          "
        >
          {question}
        </h3>

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-[#156CFF]/10
          "
        >
          {open ? (
            <Minus size={18} className="text-[#156CFF]" />
          ) : (
            <Plus size={18} className="text-[#156CFF]" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div
              className="
                border-t
                border-slate-100
                px-6
                pb-6
                pt-5
              "
            >
              <p
                className="
                  leading-8
                  text-slate-500
                "
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
