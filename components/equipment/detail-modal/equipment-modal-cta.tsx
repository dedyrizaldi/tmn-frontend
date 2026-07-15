import { ArrowRight, Download, Phone } from "lucide-react";

import { Link } from "@/i18n/navigation";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  equipment: any;
}

export default function EquipmentModalCTA({ equipment }: Props) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-b-[30px]
        bg-gradient-to-r
        from-[#04162E]
        via-[#083A72]
        to-[#156CFF]
        px-8
        py-16
        lg:px-16
      "
    >
      {/* Background Decoration */}

      <div
        className="
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-white/5
        "
      />

      <div
        className="
          absolute
          -left-24
          -bottom-24
          h-60
          w-60
          rounded-full
          bg-white/5
        "
      />

      <div
        className="
          relative
          z-10

          flex

          flex-col

          gap-10

          lg:flex-row

          lg:items-center

          lg:justify-between
        "
      >
        {/* Left */}

        <div className="max-w-2xl">
          <span
            className="
              text-xs

              font-bold

              uppercase

              tracking-[0.25em]

              text-[#7EB7FF]
            "
          >
            READY TO WORK
          </span>

          <h2
            className="
              mt-5

              text-4xl

              font-bold

              leading-tight

              text-white

              lg:text-5xl
            "
          >
            Butuh <span className="text-[#8DD4FF]">{equipment.title}</span>?
          </h2>

          <p
            className="
              mt-6

              max-w-xl

              leading-8

              text-slate-200
            "
          >
            Tim kami siap membantu Anda memilih peralatan yang tepat untuk
            kebutuhan proyek industri, tank cleaning, pumping maupun waste
            management.
          </p>

          <div
            className="
              mt-8

              flex

              items-center

              gap-3

              text-slate-200
            "
          >
            <Phone size={18} />

            <span>Konsultasi GRATIS dengan tim kami</span>
          </div>
        </div>

        {/* Right */}

        <div
          className="
            flex

            flex-col

            gap-4

            lg:w-[320px]
          "
        >
          <Link
            href="/contact"
            className="
              flex

              items-center

              justify-center

              gap-2

              rounded-2xl

              bg-white

              px-7

              py-4

              font-semibold

              text-[#156CFF]

              transition

              hover:scale-[1.03]
            "
          >
            Request Equipment
            <ArrowRight size={18} />
          </Link>

          <button
            className="
              flex

              items-center

              justify-center

              gap-2

              rounded-2xl

              border

              border-white/20

              bg-white/10

              px-7

              py-4

              font-semibold

              text-white

              backdrop-blur

              transition

              hover:bg-white/20
            "
          >
            <Download size={18} />
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
