export interface NavigationItem {
  key: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "equipment", href: "/equipment" },
  { key: "projects", href: "/projects" },
  { key: "qhse", href: "/qhse" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
];
