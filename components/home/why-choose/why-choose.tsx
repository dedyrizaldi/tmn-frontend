import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";
import SectionTitle from "@/components/common/section-title/section-title";

import { useTranslations } from "next-intl";

import WhyCard from "./why-card";
import { whyItems } from "./why.data";

export default function WhyChoose() {
  const t = useTranslations("whyChoose");

  return (
    <Section className="bg-slate-50">
      <Container>
        <SectionTitle center badge={t("badge")} title={t("title")} />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyItems.map((item) => (
            <WhyCard
              key={item.title}
              icon={item.icon}
              title={t(item.title)}
              description={t(item.description)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
