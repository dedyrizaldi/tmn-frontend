import Container from "@/components/common/container/container";

import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="
          relative
          h-[420px]
          lg:h-[460px]
        "
      >
        <HeroBackground />

        <Container
          className="
            relative
            z-20
            flex
            h-full
            items-center
          "
        >
          <HeroContent />
        </Container>
      </div>
    </section>
  );
}
