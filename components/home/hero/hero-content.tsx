import { useTranslations } from "next-intl";

import HeroButtons from "./hero-buttons";

export default function HeroContent() {
  const t = useTranslations("hero");

  return (
    <div
      className="
        relative
        z-20

        max-w-full

        lg:max-w-[600px]
      "
    >
      {/* Badge */}

      <div
        className="
          mb-4
          inline-flex
          items-center

          rounded-full

          border
          border-blue-400/20

          bg-blue-500/10

          px-3
          py-1

          backdrop-blur-sm

          sm:px-4
          sm:py-1.5
        "
      >
        <span
          className="
            text-[9px]

            font-semibold
            uppercase

            tracking-[0.22em]

            text-[#58A6FF]

            sm:text-[10px]
          "
        >
          {t("badge")}
        </span>
      </div>

      {/* Heading */}

      <h1
        className="
          max-w-[620px]

          text-[34px]

          font-black

          leading-[1.08]

          tracking-[-0.03em]

          text-white

          sm:text-[40px]

          md:text-[48px]

          lg:text-[56px]
        "
      >
        {t.rich("title", {
          blue: (chunks) => <span className="text-[#1F7AFF]">{chunks}</span>,
        })}
      </h1>

      {/* Description */}

      <p
        className="
          mt-5

          max-w-[520px]

          text-[14px]

          leading-6

          text-white/80

          sm:text-[15px]

          sm:leading-7
        "
      >
        {t("description")}
      </p>

      {/* CTA */}

      <div
        className="
          mt-6

          sm:mt-8
        "
      >
        <HeroButtons />
      </div>
    </div>
  );
}
