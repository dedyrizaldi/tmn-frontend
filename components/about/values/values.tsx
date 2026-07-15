import Container from "@/components/common/container/container";

import { values } from "./values.data";
import ValueCard from "./value-card";

export default function Values() {
  return (
    <section className="py-20">
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
            OUR VALUES
          </p>

          <h2
            className="
              mt-4
              text-[42px]
              font-black
              text-[#0F172A]
            "
          >
            The Principles That Guide
            <br />
            Everything We Do
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-4">
          {values.map((item, index) => (
            <ValueCard
              key={item.title}
              {...item}
              last={index === values.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
