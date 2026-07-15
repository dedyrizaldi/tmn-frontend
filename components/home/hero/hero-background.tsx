import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/home/hero-1.png"
          alt="PT Tirta Mega Nusantara"
          fill
          priority
          quality={100}
          className="
            object-cover

            object-[72%_center]

            sm:object-[75%_center]

            md:object-[78%_center]

            lg:object-right

            brightness-[0.9]
            contrast-110
            saturate-110

            scale-105

            lg:scale-[1.02]

            transition-all
            duration-500
          "
        />
      </div>

      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0

          bg-[#071322]/55

          lg:bg-[#071322]/40
        "
      />

      {/* Left Gradient */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-[#041325]

          via-[#041325]/95

          via-45%

          to-transparent

          lg:via-[#041325]/85
          lg:via-35%
        "
      />

      {/* Top Gradient */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-black/25

          via-transparent

          to-transparent
        "
      />

      {/* Blue Glow */}

      <div
        className="
          absolute

          -left-40

          top-1/2

          h-[420px]
          w-[420px]

          -translate-y-1/2

          rounded-full

          bg-[#0057FF]/15

          blur-[110px]

          sm:h-[520px]
          sm:w-[520px]

          lg:-left-56
          lg:h-[700px]
          lg:w-[700px]
          lg:bg-[#0057FF]/20
          lg:blur-[150px]
        "
      />

      {/* Vignette */}

      <div
        className="
          absolute
          inset-0

          shadow-[inset_0_0_120px_rgba(0,0,0,.35)]

          lg:shadow-[inset_0_0_180px_rgba(0,0,0,.35)]
        "
      />
    </>
  );
}
