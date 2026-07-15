interface Props {
  year: string;
  title: string;
  description: string;
  last?: boolean;
}

export default function TimelineItem({
  year,
  title,
  description,
  last,
}: Props) {
  return (
    <div className="relative">
      {!last && (
        <div
          className="
            absolute
            left-10
            top-8
            hidden
            h-[2px]
            w-full
            bg-slate-200
            lg:block
          "
        />
      )}

      <div className="relative z-10">
        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-[#156CFF]
            text-2xl
            font-bold
            text-white
            shadow-lg
          "
        >
          {year}
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0F172A]">{title}</h3>

        <p className="mt-3 text-[15px] leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}
