import Breadcrumb from "./breadcrumb";
import { useTranslations } from "next-intl";

export default function HeroContent() {
  const t = useTranslations("about");

  return (
    <div className="max-w-[620px]">
      <Breadcrumb />

      <h1
        className="
          text-5xl
          font-black
          leading-tight
          text-white
          lg:text-[64px]
        "
      >
        {t("badge")}
      </h1>

      <p
        className="
          mt-6
          max-w-[560px]
          text-[17px]
          leading-8
          text-white/80
        "
      >
        {t("description")}
      </p>
    </div>
  );
}
