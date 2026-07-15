import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const socials = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
    label: "YouTube",
  },
];

export default function FooterBrand() {
  const t = useTranslations("about");

  return (
    <div>
      {/* Logo */}
      <Image
        src="/logo/logo-full.png"
        alt="PT Tirta Mega Nusantara"
        width={250}
        height={100}
        className="h-12 w-auto"
        priority
      />

      {/* Description */}
      <p
        className="
          mt-5
          max-w-[340px]
          text-[14px]
          leading-7
          text-slate-300
        "
      ></p>
      {t("description")}

      {/* Social Media */}
      <div className="mt-6 flex items-center gap-3">
        {socials.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              aria-label={item.label}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-slate-300
                transition-all
                duration-300
                hover:border-[#156CFF]
                hover:bg-[#156CFF]
                hover:text-white
                hover:-translate-y-1
              "
            >
              <Icon size={16} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
