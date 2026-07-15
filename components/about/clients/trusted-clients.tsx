import Container from "@/components/common/container/container";

import ClientMarquee from "./client-marquee";
import { clients } from "./clients.data";

export default function TrustedClients() {
  return (
    <section className="bg-white py-16">
      <Container className="max-w-[1180px]">
        <div className="text-center">
          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#156CFF]
            "
          >
            TRUSTED CLIENTS
          </p>

          <h2
            className="
              mt-4
              text-[40px]
              font-black
              text-[#0F172A]
            "
          >
            Trusted By Leading
            <br />
            Companies
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[16px]
              leading-8
              text-slate-600
            "
          >
            We are proud to work together with national and international
            companies from the Oil & Gas, Marine, Chemical, Mining and
            Industrial sectors.
          </p>
        </div>

        <div className="mt-14">
          <ClientMarquee logos={clients} />
        </div>
      </Container>
    </section>
  );
}
