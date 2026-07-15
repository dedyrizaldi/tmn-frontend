"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import Container from "@/components/common/container/container";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import useScroll from "@/hooks/use-scroll";

import DesktopMenu from "./desktop-menu";
import LanguageSwitcher from "./language-switcher";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const scrolled = useScroll();
  const t = useTranslations("navigation");

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/70 bg-white/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container
        className={cn(
          `
            flex
            items-center
            justify-between

            px-5
            sm:px-6
            lg:px-0

            transition-all
            duration-300
          `,
          scrolled ? "h-[68px]" : "h-[74px]",
        )}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <DesktopMenu />

        {/* Desktop Right */}
        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher />

          <Button
            asChild
            className="
              h-11
              rounded-xl
              px-6
            "
          >
            {/* <Link href="/quote">{t("quote")}</Link> */}
          </Button>
        </div>

        {/* Mobile */}
        <MobileMenu scrolled={scrolled} />
      </Container>
    </motion.header>
  );
}
