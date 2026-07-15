import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutContent() {
  const t = useTranslations("about");

  return (
    <div>
      <p
        className="
          text-[12px]
          font-bold
          uppercase
          tracking-[0.35em]
          text-[#156CFF]
        "
      >
        WHO WE ARE
      </p>

      <h2
        className="
          mt-4
          max-w-[520px]
          text-[48px]
          font-black
          leading-tight
          text-[#0F172A]
        "
      >
        {t("tag-line-1")}
        <br />
        {t("tag-line-2")}
        <br />
        {t("tag-line-3")}
      </h2>

      <div className="mt-5 h-1 w-20 rounded-full bg-[#156CFF]" />

      <p
        className="
          mt-8
          max-w-[520px]
          text-[16px]
          leading-8
          text-slate-600
        "
      >
        {t("about-content-1")}
      </p>

      <p
        className="
          mt-5
          max-w-[520px]
          text-[16px]
          leading-8
          text-slate-600
        "
      >
        {t("about-content-2")}
      </p>

      <Link
        href="/about/company"
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-[#156CFF]
          px-7
          py-3.5
          font-semibold
          text-white
          transition
          hover:bg-[#0F5FD9]
        "
      >
        {t("about-button")}
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
