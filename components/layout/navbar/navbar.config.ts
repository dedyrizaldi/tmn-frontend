import type { NavigationItem } from "@/types/navigation";

export const navbarItems: NavigationItem[] = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "services",
    href: "/services",
    forceLocale: "id",
  },
  {
    key: "equipment",
    href: "/equipment",
  },
  {
    key: "projects",
    href: "/projects",
  },
  // {
  //   key: "qhse",
  //   href: "/qhse",
  // },
  // {
  //   key: "news",
  //   href: "/news",
  // },
  {
    key: "contact",
    href: "/contact",
  },
];
