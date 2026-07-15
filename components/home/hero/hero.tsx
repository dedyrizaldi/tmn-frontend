import Container from "@/components/common/container/container";

import FloatingActions from "./floating-actions";
import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import HeroStats from "./hero-stats";
import ScrollIndicator from "./scroll-indicator";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ================= HERO ================= */}
      <div
        className="
          relative
          h-[520px]
          sm:h-[560px]
          lg:h-[600px]
          overflow-hidden
        "
      >
        {/* Background */}
        <HeroBackground />

        {/* Content */}
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

        {/* Floating Button */}
        <FloatingActions />

        {/* Scroll */}
        <ScrollIndicator />
      </div>

      {/* ================= HERO STATS ================= */}
      <div
        className="
          relative
          z-30
          -mt-8
          lg:-mt-10
        "
      >
        <Container>
          <HeroStats />
        </Container>
      </div>
    </section>
  );
}
