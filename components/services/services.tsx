import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import Hero from "./hero/hero";
import DetailServices from "./detail-services/detail-services";
import Process from "./process/process";
import Industries from "./industries/industries";
import FAQ from "./faq/faq";

export default function Services() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services */}
      <Section
        className="
          bg-white
          py-16
          lg:py-24
        "
      >
        <Container>
          <DetailServices />
        </Container>
      </Section>

      {/* Process */}
      <Process />

      {/* Industries */}
      <Industries />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
