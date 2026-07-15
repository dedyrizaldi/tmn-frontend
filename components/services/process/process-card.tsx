interface Props {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessCard({
  number,
  title,
  description,
  isLast = false,
}: Props) {
  return (
    <div className="relative h-full">
      {/* Line Desktop */}

      {!isLast && (
        <div
          className="
            absolute

            left-[calc(100%-8px)]

            top-10

            hidden

            h-[2px]

            w-full

            bg-slate-200

            lg:block
          "
        />
      )}

      <div
        className="
          group

          relative

          h-full

          rounded-3xl

          border

          border-slate-200

          bg-white

          p-8

          transition-all

          duration-500

          hover:-translate-y-2

          hover:border-[#156CFF]

          hover:shadow-[0_20px_40px_rgba(0,0,0,.08)]
        "
      >
        {/* Number */}

        <div
          className="
            flex

            h-16

            w-16

            items-center

            justify-center

            rounded-full

            bg-[#156CFF]

            text-2xl

            font-bold

            text-white

            transition-transform

            duration-300

            group-hover:scale-110
          "
        >
          {number}
        </div>

        {/* Title */}

        <h3
          className="
            mt-8

            text-xl

            font-bold

            text-[#04162E]

            transition-colors

            duration-300

            group-hover:text-[#156CFF]
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4

            text-[15px]

            leading-7

            text-slate-600
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
