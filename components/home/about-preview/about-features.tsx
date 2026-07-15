"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutFeatures() {
  const t = useTranslations("about");

  const items = [t("feature1"), t("feature2"), t("feature3"), t("feature4")];

  return (
    <div className="mt-8 space-y-5">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-4">
          <CheckCircle2 className="h-6 w-6 text-[var(--primary)]" />

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
