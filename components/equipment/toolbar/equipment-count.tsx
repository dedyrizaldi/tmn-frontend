"use client";

import { useTranslations } from "next-intl";

export default function EquipmentCount() {
  const t = useTranslations("equipmentPage.toolbar");

  return (
    <div>
      <h3
        className="
          text-lg
          font-bold
          text-[#04162E]
        "
      >
        {t("title")}
      </h3>

      <p
        className="
          mt-1
          text-sm
          text-slate-500
        "
      >
        {t("description")}
      </p>
    </div>
  );
}
