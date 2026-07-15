import Container from "@/components/common/container/container";

import AboutContent from "./about-content";
import AboutImage from "./about-image";

export default function AboutPreview() {
  return (
    <section
      className="
        bg-white

        py-14

        lg:py-20
      "
    >
      <Container
        className="
          px-5

          sm:px-6

          lg:px-0

          max-w-[1180px]
        "
      >
        <div
          className="
            grid

            gap-10

            lg:grid-cols-2

            lg:items-center

            lg:gap-16
          "
        >
          {/* Mobile gambar dulu */}

          <div className="order-1 lg:order-2">
            <AboutImage />
          </div>

          <div className="order-2 lg:order-1">
            <AboutContent />
          </div>
        </div>
      </Container>
    </section>
  );
}
