import { Link } from "@/i18n/navigation";

const menus = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function FooterLinks() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

      <ul className="space-y-3">
        {menus.map((menu) => (
          <li key={menu.title}>
            <Link
              href={menu.href}
              className="
                text-[14px]
                text-slate-300
                transition
                hover:text-[#156CFF]
              "
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
