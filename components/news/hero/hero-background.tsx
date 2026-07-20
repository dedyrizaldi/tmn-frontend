export default function HeroBackground() {
  return (
    <>
      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#04162E]
          via-[#0B2447]
          to-[#156CFF]
        "
      />

      {/* Glow */}

      <div
        className="
          absolute
          -right-32
          top-0
          h-96
          w-96
          rounded-full
          bg-[#156CFF]/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -left-32
          bottom-0
          h-80
          w-80
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />
    </>
  );
}
