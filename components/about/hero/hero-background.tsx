import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/images/about-v1.png"
        alt="About TMN"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#04162E]/70" />

      {/* Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#04162E]
          via-[#04162E]/70
          to-transparent
        "
      />
    </>
  );
}
