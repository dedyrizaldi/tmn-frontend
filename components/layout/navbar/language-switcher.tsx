"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const pathname = usePathname();

  const router = useRouter();

  function changeLocale(nextLocale: "id" | "en") {
    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => changeLocale("id")}
        className={`transition

        ${
          locale === "id"
            ? "font-semibold text-[var(--primary)]"
            : "text-slate-500 hover:text-[var(--primary)]"
        }

        `}
      >
        ID
      </button>

      <span className="text-slate-300">|</span>

      <button
        onClick={() => changeLocale("en")}
        className={`transition

        ${
          locale === "en"
            ? "font-semibold text-[var(--primary)]"
            : "text-slate-500 hover:text-[var(--primary)]"
        }

        `}
      >
        EN
      </button>
    </div>
  );
}
