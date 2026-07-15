import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function AboutButton() {
  const t = useTranslations("about");

  return (
    <Link
      href="/about"
      className="
        group
        inline-flex
        items-center

        gap-3

        rounded-full

        bg-[#156CFF]

        py-2
        pl-5
        pr-2

        text-[14px]
        font-semibold

        text-white

        shadow-[0_10px_25px_rgba(21,108,255,.25)]

        transition-all
        duration-300

        hover:bg-[#0F5FE0]
        hover:shadow-[0_18px_40px_rgba(21,108,255,.35)]

        sm:pl-6

        lg:gap-4
        lg:pl-7
      "
    >
      <span>{t("button")}</span>

      <span
        className="
          flex

          h-9
          w-9

          items-center
          justify-center

          rounded-full

          bg-white

          transition-transform
          duration-300

          group-hover:translate-x-1

          lg:h-11
          lg:w-11
        "
      >
        <ArrowRight size={16} className="text-[#156CFF]" strokeWidth={2.5} />
      </span>
    </Link>
  );
}
