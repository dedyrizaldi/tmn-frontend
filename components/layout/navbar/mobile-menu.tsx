"use client";

import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Link, usePathname } from "@/i18n/navigation";

import LanguageSwitcher from "./language-switcher";
import Logo from "./logo";
import { navbarItems } from "./navbar.config";

interface MobileMenuProps {
  scrolled: boolean;
}

export default function MobileMenu({ scrolled }: MobileMenuProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navigation");

  return (
    <div className="lg:hidden">
      <Sheet>
        {/* Trigger */}
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className={`
              h-11
              w-11
              rounded-xl
              transition-all
              duration-300

              ${
                scrolled
                  ? `
                    border
                    border-slate-200
                    bg-white
                    text-slate-900
                    shadow-sm
                    hover:bg-slate-100
                  `
                  : `
                    border
                    border-white/20
                    bg-black/20
                    text-white
                    backdrop-blur-md
                    hover:bg-black/30
                  `
              }
            `}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        {/* Drawer */}
        <SheetContent side="right" className="flex flex-col bg-white p-0">
          {/* Header */}
          <div className="border-b border-slate-200 px-6 py-5">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-1">
              {navbarItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                const linkLocale = item.forceLocale ?? locale;

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    locale={linkLocale}
                    className={`
                      flex
                      items-center
                      rounded-xl
                      px-4
                      py-3
                      text-[15px]
                      font-medium
                      transition-all
                      duration-300

                      ${
                        active
                          ? "bg-[#156CFF]/10 text-[#156CFF]"
                          : "text-slate-800 hover:bg-slate-100 hover:text-[#156CFF]"
                      }
                    `}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-slate-200 p-5">
            <div className="mb-5 flex justify-center">
              <LanguageSwitcher />
            </div>

            {/* <Button asChild className="h-11 w-full rounded-xl">
              <Link href="/quote">{t("quote")}</Link>
            </Button> */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
