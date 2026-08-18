"use client";

import {
  Award,
  CheckCircle2,
  Factory,
  Fuel,
  Ship,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

const industries = [
  {
    key: "oilGas",
    icon: Fuel,
  },
  {
    key: "marineShipping",
    icon: Ship,
  },
  {
    key: "petrochemical",
    icon: Factory,
  },
  {
    key: "manufacturing",
    icon: Factory,
  },
  {
    key: "portTerminal",
    icon: Ship,
  },
] as const;

const reasons = [
  {
    key: "experiencedTeam",
    icon: Award,
  },
  {
    key: "safetyFirst",
    icon: ShieldCheck,
  },
  {
    key: "professionalService",
    icon: Users,
  },
  {
    key: "reliableSolutions",
    icon: CheckCircle2,
  },
] as const;

export default function Industries() {
  const t = useTranslations("home.industries");

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            DESKTOP
        ====================================================== */}

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-14">
          {/* ===================================================
              INDUSTRIES
          ==================================================== */}

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#156CFF]">
              {t("badge")}
            </p>

            <h2 className="max-w-[500px] text-3xl font-bold leading-tight tracking-tight text-[#061A33] xl:text-[36px]">
              {t.rich("title", {
                blue: (chunks) => (
                  <span className="text-[#156CFF]">{chunks}</span>
                ),
              })}
            </h2>

            <p className="mt-4 max-w-[500px] text-sm leading-7 text-slate-500">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <div
                    key={industry.key}
                    className="
                      flex
                      items-center
                      gap-2.5
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-slate-600
                      transition-all
                      duration-300
                      hover:border-[#156CFF]
                      hover:bg-blue-50
                      hover:text-[#156CFF]
                    "
                  >
                    <Icon size={17} strokeWidth={1.8} className="shrink-0" />

                    <span>{t(`items.${industry.key}`)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              WHY CHOOSE US
          ==================================================== */}

          <div className="border-l border-slate-200 pl-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#156CFF]">
              {t("whyChooseLabel")}
            </p>

            <h2 className="max-w-[520px] text-3xl font-bold leading-tight tracking-tight text-[#061A33] xl:text-[36px]">
              {t("whyChooseTitle")}
            </h2>

            <p className="mt-4 max-w-[540px] text-sm leading-7 text-slate-500">
              {t("whyChooseDescription")}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div key={reason.key} className="group">
                    <div
                      className="
                        mb-4
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                        text-[#156CFF]
                        transition-all
                        duration-300
                        group-hover:bg-[#156CFF]
                        group-hover:text-white
                      "
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-base font-semibold text-[#061A33]">
                      {t(`reasons.${reason.key}.title`)}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {t(`reasons.${reason.key}.description`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ====================================================== */}

        <div className="lg:hidden">
          {/* ===================================================
              INDUSTRIES
          ==================================================== */}

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#156CFF]">
              {t("badge")}
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#061A33] sm:text-3xl">
              {t.rich("title", {
                blue: (chunks) => (
                  <span className="text-[#156CFF]">{chunks}</span>
                ),
              })}
            </h2>

            <p className="mt-4 max-w-[650px] text-sm leading-7 text-slate-500">
              {t("description")}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <div
                    key={industry.key}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-3.5
                      py-2
                      text-xs
                      font-medium
                      text-slate-600
                      sm:px-4
                      sm:py-2.5
                      sm:text-sm
                    "
                  >
                    <Icon size={16} strokeWidth={1.8} className="shrink-0" />

                    <span>{t(`items.${industry.key}`)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              DIVIDER
          ==================================================== */}

          <div className="my-12 h-px w-full bg-slate-200" />

          {/* ===================================================
              WHY CHOOSE US
          ==================================================== */}

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#156CFF]">
              {t("whyChooseLabel")}
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#061A33] sm:text-3xl">
              {t("whyChooseTitle")}
            </h2>

            <p className="mt-4 max-w-[650px] text-sm leading-7 text-slate-500">
              {t("whyChooseDescription")}
            </p>

            <div className="mt-8 space-y-7">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div key={reason.key} className="flex gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                        text-[#156CFF]
                      "
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-[#061A33]">
                        {t(`reasons.${reason.key}.title`)}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-slate-500">
                        {t(`reasons.${reason.key}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
