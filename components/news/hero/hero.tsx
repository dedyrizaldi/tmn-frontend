import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#04162E]">
      <HeroBackground />

      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
}
