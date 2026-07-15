import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import { Link } from "@/i18n/navigation";

import QHSECard from "./qhse-card";
import Certification from "./certification";
import { commitments, certifications } from "./qhse.data";

export default function QHSE() {
  const t = useTranslations("qhse");

  return (
    <Section className="bg-[#0F172A] text-white">
      <Container>
        <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              {t("badge")}
            </p>

            <h2 className="max-w-xl text-5xl font-bold leading-tight">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {t("description")}
            </p>

            <div className="mt-10 grid gap-4">
              {commitments.map((item) => (
                <QHSECard key={item} title={t(item)} />
              ))}
            </div>

            <Link
              href="/qhse"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#0066D9]
                px-7
                py-4
                font-semibold
                transition
                hover:bg-[#0055B8]
              "
            >
              {t("button")}

              <ArrowRight size={18} />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-5 self-center">
            {certifications.map((item) => (
              <Certification key={item} title={item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
