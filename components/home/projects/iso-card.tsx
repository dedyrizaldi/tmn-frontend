interface Props {
  title: string;
}

export default function IsoCard({ title }: Props) {
  return (
    <div
      className="
        flex
        h-12
        flex-col
        items-center
        justify-center
        rounded-lg
        border
        border-white/10
        bg-white/5
        px-2
        backdrop-blur-sm
        transition-all
        duration-300
        hover:bg-white/10
      "
    >
      <span
        className="
          text-xs
          font-black
          tracking-wide
          text-white
        "
      >
        ISO
      </span>

      <span
        className="
          mt-0.5
          text-[9px]
          font-medium
          leading-none
          text-slate-300
        "
      >
        {title}
      </span>
    </div>
  );
}
