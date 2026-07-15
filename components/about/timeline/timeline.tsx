import Container from "@/components/common/container/container";

import TimelineItem from "./timeline-item";
import { timeline } from "./timeline.data";

export default function Timeline() {
  return (
    <section className="bg-slate-50 py-20">
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
            COMPANY JOURNEY
          </p>

          <h2
            className="
              mt-4
              text-[42px]
              font-black
              text-[#0F172A]
            "
          >
            Growing Together
            <br />
            Since 2007
          </h2>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <TimelineItem
              key={item.year}
              {...item}
              last={index === timeline.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
