import { ArrowRight, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function HeroContent() {
  const t = useTranslations("servicesPage");

  return (
    <div
      className="
        max-w-[560px]

        text-center

        lg:text-left
      "
    >
      {/* Badge */}

      <div
        className="
          inline-flex

          rounded-md

          bg-[#156CFF]

          px-3

          py-1.5
        "
      >
        <span
          className="
            text-[10px]

            font-bold

            uppercase

            tracking-[0.25em]

            text-white
          "
        >
          {t("badge")}
        </span>
      </div>

      {/* Title */}

      <h1
        className="
          mt-4

          text-[28px]

          font-bold

          leading-[1.1]

          text-white

          sm:text-[34px]

          lg:text-[52px]
        "
      >
        {t.rich("title", {
          blue: (chunks) => <span className="text-[#156CFF]">{chunks}</span>,
        })}
      </h1>

      {/* Description */}

      <p
        className="
          mt-4

          max-w-[520px]

          text-[14px]

          leading-7

          text-slate-300

          sm:text-[15px]

          lg:text-[16px]
        "
      >
        {t("description")}
      </p>

      {/* Buttons */}

      <div
        className="
          mt-8

          flex

          flex-col

          gap-3

          sm:flex-row

          sm:justify-center

          lg:justify-start
        "
      >
        {/* Primary */}

        <Link
          href="/quote"
          className="
            inline-flex

            h-12

            items-center

            justify-center

            gap-2

            rounded-lg

            bg-[#156CFF]

            px-6

            text-sm

            font-semibold

            text-white

            transition-all

            duration-300

            hover:bg-[#0E5DE8]
          "
        >
          {t("primary")}

          <ArrowRight size={16} />
        </Link>

        {/* Secondary */}

        <Link
          href="/contact"
          className="
            inline-flex

            h-12

            items-center

            justify-center

            gap-2

            rounded-lg

            border

            border-white/20

            bg-black/20

            px-6

            text-sm

            font-semibold

            text-white

            backdrop-blur-md

            transition-all

            duration-300

            hover:border-[#156CFF]

            hover:bg-white/10
          "
        >
          <Phone size={16} />

          {t("secondary")}
        </Link>
      </div>
    </div>
  );
}
