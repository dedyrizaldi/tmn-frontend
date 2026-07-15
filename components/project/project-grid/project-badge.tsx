interface Props {
  category: string;
}

const badgeColors: Record<string, string> = {
  "Tank Cleaning": "bg-blue-100 text-blue-700 border-blue-200",

  "Industrial Cleaning": "bg-green-100 text-green-700 border-green-200",

  "Waste Management": "bg-orange-100 text-orange-700 border-orange-200",

  "Sludge Removal": "bg-purple-100 text-purple-700 border-purple-200",

  Pumping: "bg-cyan-100 text-cyan-700 border-cyan-200",

  Default: "bg-slate-100 text-slate-700 border-slate-200",
};

export default function ProjectBadge({ category }: Props) {
  const color = badgeColors[category] ?? badgeColors.Default;

  return (
    <span
      className={`
        inline-flex

        items-center

        rounded-full

        border

        px-4

        py-2

        text-xs

        font-bold

        uppercase

        tracking-[0.15em]

        backdrop-blur-sm

        ${color}
      `}
    >
      {category}
    </span>
  );
}
