import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      {/* Background Image */}

      <Image
        src="/images/services/hero-v1.png"
        alt="Industrial Cleaning"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-center
        "
      />

      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-[#04162E]

          via-[#04162E]/85

          to-[#04162E]/35
        "
      />

      {/* Top Shadow */}

      <div
        className="
          absolute

          inset-0

          bg-gradient-to-b

          from-black/30

          via-transparent

          to-transparent
        "
      />

      {/* Bottom Shadow */}

      <div
        className="
          absolute

          inset-0

          bg-gradient-to-t

          from-[#04162E]/35

          via-transparent

          to-transparent
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute

          -left-44

          top-10

          h-[380px]

          w-[380px]

          rounded-full

          bg-[#156CFF]/10

          blur-[130px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute

          -right-52

          bottom-0

          h-[460px]

          w-[460px]

          rounded-full

          bg-[#156CFF]/10

          blur-[150px]
        "
      />

      {/* Vignette */}

      <div
        className="
          absolute

          inset-0

          shadow-[inset_0_0_180px_rgba(0,0,0,0.35)]
        "
      />
    </>
  );
}
