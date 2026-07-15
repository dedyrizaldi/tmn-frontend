import { CheckCircle2 } from "lucide-react";

interface QHSECardProps {
  title: string;
}

export default function QHSECard({ title }: QHSECardProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        backdrop-blur-md
        transition
        hover:border-blue-500
        hover:bg-white/10
      "
    >
      <CheckCircle2 size={24} className="text-[#3B82F6]" />

      <span className="font-medium text-white">{title}</span>
    </div>
  );
}
