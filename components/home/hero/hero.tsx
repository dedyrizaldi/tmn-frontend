import FloatingActions from "./floating-actions";
import HeroSlider from "./hero-slider";
import HeroStats from "./hero-stats";

export default function Hero() {
  return (
    <section className="relative">
      {/* ================= HERO SLIDER ================= */}
      <div
        className="
          relative
          h-[520px]
          overflow-hidden
          sm:h-[560px]
          lg:h-[600px]
        "
      >
        <HeroSlider />

        {/* Floating Button */}
        <FloatingActions />
      </div>

      {/* ================= FLOATING HERO STATS ================= */}
      <div
        className="
          relative
          z-30
          -mt-10
          px-4
          sm:-mt-12
          sm:px-6
          lg:-mt-14
          lg:px-8
        "
      >
        <HeroStats />
      </div>
    </section>
  );
}
