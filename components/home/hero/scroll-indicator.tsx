"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToNextSection}
      className="
        absolute
        left-1/2
        bottom-16
        z-20

        hidden

        -translate-x-1/2

        lg:flex
        lg:flex-col
        lg:items-center
        lg:gap-2

        text-white
      "
    >
      {/* Text */}

      <span
        className="
          text-[11px]
          uppercase
          tracking-[0.28em]
          text-white/70
        "
      >
        Scroll
      </span>

      {/* Mouse */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
          flex
          h-12
          w-7
          items-start
          justify-center

          rounded-full

          border
          border-white/40

          p-2
        "
      >
        <motion.div
          animate={{
            y: [0, 14, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            h-2
            w-2
            rounded-full
            bg-white
          "
        />
      </motion.div>

      {/* Arrow */}

      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <ChevronDown size={18} className="text-white/80" />
      </motion.div>
    </button>
  );
}
