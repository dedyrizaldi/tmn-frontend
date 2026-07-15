import Image from "next/image";

import { Link } from "@/i18n/navigation";

interface LogoProps {
  mobile?: boolean;
}

export default function Logo({ mobile = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="
        flex
        shrink-0
        items-center
        transition-opacity
        hover:opacity-90
      "
    >
      <Image
        src={mobile ? "/logo/logo-icon.png" : "/logo/logo-full.png"}
        alt="PT Tirta Mega Nusantara"
        width={mobile ? 46 : 165}
        height={mobile ? 46 : 52}
        priority
        className={`
          h-auto
          w-auto
          object-contain
          transition-all
          duration-300
          ${
            mobile
              ? "max-h-[46px]"
              : "max-h-[42px] sm:max-h-[46px] lg:max-h-[50px]"
          }
        `}
      />
    </Link>
  );
}
