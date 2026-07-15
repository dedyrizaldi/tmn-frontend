import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import AboutContent from "./about-content";
import AboutTimeline from "./about-timeline";
import AboutVideo from "./about-video";

export default function AboutPreview() {
  return (
    <Section
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]

        py-16

        lg:py-24
      "
    >
      <Container
        className="
          px-5

          sm:px-6

          lg:px-0
        "
      >
        <div
          className="
            grid

            gap-10

            items-center

            lg:grid-cols-[1fr_420px_170px]

            xl:grid-cols-[1fr_470px_180px]
          "
        >
          {/* LEFT */}

          <div
            className="
              order-2

              max-w-full

              lg:order-1
              lg:max-w-[470px]
            "
          >
            <AboutContent />
          </div>

          {/* CENTER */}

          <div
            className="
              order-1

              flex
              justify-center

              lg:order-2
            "
          >
            <AboutVideo />
          </div>

          {/* RIGHT */}

          <div
            className="
              order-3

              hidden

              lg:flex
              lg:justify-end
            "
          >
            <AboutTimeline />
          </div>
        </div>
      </Container>
    </Section>
  );
}
