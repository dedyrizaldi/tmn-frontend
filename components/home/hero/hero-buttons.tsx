"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function HeroButtons() {
  const t = useTranslations("hero");

  return (
    <div
      className="
        flex
        flex-col
        gap-3

        sm:flex-row
        sm:items-center
        sm:gap-4
      "
    >
      {/* Primary */}
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/services"
          className="
            group
            inline-flex

            h-10

            items-center
            justify-center

            gap-2

            rounded-full

            bg-[#0066D9]

            px-5

            text-[13px]
            font-semibold

            text-white

            shadow-md

            transition-all
            duration-300

            hover:bg-[#0052AD]

            sm:h-11
            sm:px-6
            sm:text-sm
          "
        >
          {t("primary")}

          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* Secondary */}
      {/* <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <button
          type="button"
          className="
            group
            inline-flex
            items-center
            gap-3
          "
        >
          <span
            className="
              flex

              h-10
              w-10

              items-center
              justify-center

              rounded-full

              border
              border-white/20

              bg-white/10

              text-white

              backdrop-blur

              transition-all
              duration-300

              group-hover:bg-[#0066D9]

              sm:h-11
              sm:w-11
            "
          >
            <Play size={13} className="ml-0.5" fill="currentColor" />
          </span>

          <div className="text-left">
            <p
              className="
                text-[9px]

                uppercase

                tracking-[0.18em]

                text-slate-300

                sm:text-[10px]
                sm:tracking-[0.22em]
              "
            >
              {t("watch")}
            </p>

            <p
              className="
                text-[13px]
                font-semibold
                text-white

                sm:text-sm
              "
            >
              {t("company")}
            </p>
          </div>
        </button>
      </motion.div> */}
    </div>
  );
}
