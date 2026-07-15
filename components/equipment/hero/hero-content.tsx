import { ShieldCheck, Truck, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function HeroContent() {
  const t = useTranslations("equipmentPage.hero");

  return (
    <div className="max-w-3xl text-white">
      <p
        className="
        mt-7
          inline-flex
          rounded-full
          bg-[#156CFF]/20
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#7EB7FF]
        "
      >
        {t("badge")}
      </p>

      <h1
        className="
          mt-6
          text-4xl
          font-bold
          leading-tight
          lg:text-[30px]
        "
      >
        {t("title")}
      </h1>

      <p
        className="
          mt-6
          max-w-2xl
          lg:text-[15px]
          leading-8
          text-slate-300
        "
      >
        {t("description")}
      </p>

      <div
        className="
          mt-10
          flex
          flex-wrap
          gap-4
        "
      >
        <Link
          href="/contact"
          className="
            rounded-xl
            bg-[#156CFF]
            px-7
            py-4
            font-semibold
            text-white
            transition
            hover:bg-[#0F5BE7]
          "
        >
          {t("primary")}
        </Link>

        <Link
          href="/services"
          className="
            rounded-xl
            border
            border-white/20
            px-7
            py-4
            font-semibold
            text-white
            backdrop-blur
            transition
            hover:bg-white/10
          "
        >
          {t("secondary")}
        </Link>
      </div>

      {/* Stats */}

      <div
        className="
          mt-12
          flex
          flex-wrap
          gap-8
        "
      >
        {/* <div className="flex items-center gap-3">
          <Truck className="text-[#156CFF]" />

          <div>
            <div className="text-2xl font-bold">50+</div>

            <div className="text-sm text-slate-300">{t("equipment")}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Wrench className="text-[#156CFF]" />

          <div>
            <div className="text-2xl font-bold">6</div>

            <div className="text-sm text-slate-300">{t("categories")}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#156CFF]" />

          <div>
            <div className="text-2xl font-bold">100%</div>

            <div className="text-sm text-slate-300">{t("ready")}</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
