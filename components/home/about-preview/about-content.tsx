import { useTranslations } from "next-intl";

import AboutButton from "./about-button";

export default function AboutContent() {
  const t = useTranslations("about");

  return (
    <div
      className="
        w-full
        max-w-full

        lg:max-w-[480px]
      "
    >
      {/* Badge */}

      <span
        className="
          text-[10px]

          font-bold
          uppercase

          tracking-[0.28em]

          text-[#156CFF]

          sm:text-xs
        "
      >
        {t("badge")}
      </span>

      {/* Title */}

      <h2
        className="
          mt-3

          text-[30px]

          font-extrabold

          leading-[1.15]

          tracking-[-0.03em]

          text-[#0F172A]

          sm:text-[36px]

          lg:mt-4

          lg:text-[42px]
        "
      >
        {t.rich("title", {
          blue: (chunks) => <span className="text-[#156CFF]">{chunks}</span>,
        })}
      </h2>

      {/* Description */}

      <p
        className="
          mt-5

          text-[14px]

          leading-7

          text-slate-600

          sm:text-[15px]

          lg:mt-6

          lg:text-[16px]

          lg:leading-8
        "
      >
        {t("description")}
      </p>

      {/* Second */}

      <p
        className="
          mt-4

          text-[14px]

          leading-7

          text-slate-600

          sm:text-[15px]

          lg:mt-6

          lg:text-[16px]

          lg:leading-8
        "
      >
        {t("description2")}
      </p>

      {/* Button */}

      <div
        className="
          mt-8

          lg:mt-10
        "
      >
        <AboutButton />
      </div>
    </div>
  );
}
