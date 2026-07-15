import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import TrustedClientsCarousel from "./trusted-clients-carousel";

export default function TrustedClients() {
  return (
    <Section className="pt-4 pb-2 lg:pt-6 lg:pb-4">
      <Container>
        <div
          className="
            rounded-[32px]
            px-10
            py-8
            shadow-[0_20px_60px_rgba(15,23,42,.08)]
          "
        >
          <div className="mb-8 text-center">
            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-slate-700
            "
            >
              TRUSTED BY LEADING COMPANIES
            </span>
          </div>

          <TrustedClientsCarousel />
        </div>
      </Container>
    </Section>
  );
}
