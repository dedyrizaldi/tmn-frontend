import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/images/services/hero-v1.png"
        alt="Equipment"
        fill
        priority
        className="object-cover"
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#04162E]
          via-[#04162E]/90
          to-[#04162E]/35
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/15
        "
      />
    </>
  );
}
