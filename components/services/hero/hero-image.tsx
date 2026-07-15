import Image from "next/image";
import { Award, ShieldCheck } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative">
      {/* Main Image */}

      <div
        className="
          relative

          overflow-hidden

          rounded-3xl

          border

          border-white/10

          shadow-2xl
        "
      >
        <Image
          src="/images/services/he1ro.png"
          alt="Industrial Cleaning"
          width={900}
          height={900}
          priority
          className="
            h-[320px]

            w-full

            object-cover

            sm:h-[420px]

            lg:h-[620px]
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute

            inset-0

            bg-gradient-to-t

            from-[#04162E]/70

            via-transparent

            to-transparent
          "
        />
      </div>

      {/* Card 1 */}

      <div
        className="
          absolute

          left-4

          top-4

          rounded-2xl

          border

          border-white/10

          bg-white/10

          px-4

          py-3

          backdrop-blur-xl

          lg:left-8

          lg:top-8
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex

              h-11

              w-11

              items-center

              justify-center

              rounded-full

              bg-[#156CFF]
            "
          >
            <ShieldCheck size={20} className="text-white" />
          </div>

          <div>
            <p className="text-xs text-slate-300">Certified</p>

            <h4 className="font-semibold text-white">ISO Standard</h4>
          </div>
        </div>
      </div>

      {/* Card 2 */}

      <div
        className="
          absolute

          bottom-4

          right-4

          rounded-2xl

          border

          border-white/10

          bg-white/10

          px-5

          py-4

          backdrop-blur-xl

          lg:bottom-8

          lg:right-8
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex

              h-12

              w-12

              items-center

              justify-center

              rounded-full

              bg-[#156CFF]
            "
          >
            <Award size={22} className="text-white" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">19+</h3>

            <p className="text-xs text-slate-300">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}

      <div
        className="
          absolute

          -bottom-10

          left-1/2

          h-40

          w-40

          -translate-x-1/2

          rounded-full

          bg-[#156CFF]/30

          blur-[90px]
        "
      />
    </div>
  );
}
