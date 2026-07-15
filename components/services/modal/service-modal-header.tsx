import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface Props {
  service: {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
  };
}

const highlights = [
  "Zero Accident",
  "Certified Team",
  "Modern Equipment",
  "Environment Care",
];

export default function ModalHeader({ service }: Props) {
  return (
    <section
      className="
        grid

        gap-10

        border-b

        border-slate-200

        p-8

        lg:grid-cols-[1fr_520px]

        lg:p-10
      "
    >
      {/* ================= LEFT ================= */}

      <div className="flex flex-col justify-center">
        <span
          className="
            text-xs

            font-bold

            uppercase

            tracking-[0.3em]

            text-[#156CFF]
          "
        >
          {service.title}
        </span>

        <h1
          className="
            mt-3

            text-4xl

            font-bold

            leading-tight

            text-[#04162E]

            lg:text-5xl
          "
        >
          {service.title}
        </h1>

        <p
          className="
            mt-3

            text-xl

            text-slate-600
          "
        >
          {service.subtitle}
        </p>

        <p
          className="
            mt-6

            max-w-[620px]

            text-[15px]

            leading-8

            text-slate-600
          "
        >
          {service.description}
        </p>

        {/* Highlights */}

        <div
          className="
            mt-10

            grid

            grid-cols-2

            gap-5
          "
        >
          {highlights.map((item) => (
            <div
              key={item}
              className="
                flex

                items-center

                gap-3
              "
            >
              <CheckCircle2 size={20} className="text-[#156CFF]" />

              <span
                className="
                  text-sm

                  font-semibold

                  text-[#04162E]
                "
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT ================= */}

      <div
        className="
          relative

          overflow-hidden

          rounded-3xl

          shadow-xl
        "
      >
        <Image
          src={service.heroImage ? service.heroImage : service.image}
          alt={service.title}
          width={700}
          height={520}
          className="
            h-full

            w-full

            object-cover
          "
        />

        {/* Gradient */}

        <div
          className="
            absolute

            inset-0

            bg-gradient-to-r

            from-transparent

            via-transparent

            to-[#04162E]/20
          "
        />
      </div>
    </section>
  );
}
