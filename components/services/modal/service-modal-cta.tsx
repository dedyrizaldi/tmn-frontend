import { ArrowRight, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

interface Props {
  service: {
    title: string;
  };
}

export default function ServiceModalCTA({ service }: Props) {
  const t = useTranslations("servicesPage.modal.cta");

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-b-[32px]
        bg-[#04162E]
        px-8
        py-16
        lg:px-12
      "
    >
      {/* Background Blur */}

      <div
        className="
          absolute
          -left-24
          top-0
          h-64
          w-64
          rounded-full
          bg-[#156CFF]/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -right-24
          bottom-0
          h-64
          w-64
          rounded-full
          bg-[#156CFF]/20
          blur-[120px]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          text-center
        "
      >
        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.3em]
            text-[#4DA3FF]
          "
        >
          {t("badge")}
        </span>

        <h2
          className="
            mt-5
            text-3xl
            font-bold
            leading-tight
            text-white
            lg:text-5xl
          "
        >
          {t.rich("title", {
            service: () => (
              <span className="text-[#4DA3FF]">{service.title}</span>
            ),
          })}
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-[15px]
            leading-8
            text-slate-300
          "
        >
          {t("description")}
        </p>

        <div
          className="
            mt-10
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
          "
        >
          {/* Request Quote */}

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#156CFF]
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0F5BE7]
            "
          >
            {t("primary")}

            <ArrowRight size={18} />
          </Link>

          {/* Contact */}

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/20
              bg-white/10
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-white/20
            "
          >
            <Phone size={18} />

            {t("secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
