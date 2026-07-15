"use client";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { navbarItems } from "./navbar.config";

export default function DesktopMenu() {
  const pathname = usePathname();
  const t = useTranslations("navigation");

  return (
    <nav
      className="
        hidden
        lg:flex
        items-center
        gap-8

        xl:gap-10
      "
    >
      {navbarItems.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              `
                group
                relative

                py-2

                text-[15px]
                font-medium

                transition-all
                duration-300
              `,
              active ? "text-[#156CFF]" : "text-slate-700 hover:text-[#156CFF]",
            )}
          >
            {t(item.key)}

            {/* Underline */}

            <span
              className={cn(
                `
                  absolute

                  left-0
                  -bottom-[6px]

                  h-[2px]

                  rounded-full

                  bg-[#156CFF]

                  transition-all
                  duration-300
                `,
                active ? "w-full" : "w-0 group-hover:w-full",
              )}
            />

            {/* Hover Dot */}

            <span
              className={cn(
                `
                  absolute

                  left-1/2

                  -bottom-[12px]

                  h-1.5
                  w-1.5

                  -translate-x-1/2

                  rounded-full

                  bg-[#156CFF]

                  transition-all
                  duration-300
                `,
                active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
