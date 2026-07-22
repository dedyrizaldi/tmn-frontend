interface Props {
  category: string;
}

const badgeColors = [
  "bg-blue-100 text-blue-700 border-blue-200",
  "bg-green-100 text-green-700 border-green-200",
  "bg-orange-100 text-orange-700 border-orange-200",
  "bg-purple-100 text-purple-700 border-purple-200",
  "bg-cyan-100 text-cyan-700 border-cyan-200",
  "bg-pink-100 text-pink-700 border-pink-200",
  "bg-amber-100 text-amber-700 border-amber-200",
  "bg-emerald-100 text-emerald-700 border-emerald-200",
  "bg-indigo-100 text-indigo-700 border-indigo-200",
  "bg-rose-100 text-rose-700 border-rose-200",
  "bg-lime-100 text-lime-700 border-lime-200",
  "bg-sky-100 text-sky-700 border-sky-200",
];

function getBadgeColor(category: string): string {
  let hash = 0;

  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash);
  }

  return badgeColors[Math.abs(hash) % badgeColors.length];
}

export default function ProjectBadge({ category }: Props) {
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
        ${getBadgeColor(category)}
      `}
    >
      {category}
    </span>
  );
}
