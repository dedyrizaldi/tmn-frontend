import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function NewsHeader() {
  return (
    <div className="mb-5 flex items-center justify-between">
      <p
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-[#156CFF]
        "
      >
        LATEST NEWS & INSIGHTS
      </p>

      <Link
        href="/news"
        className="
          flex
          items-center
          gap-2
          text-[12px]
          font-semibold
          text-[#156CFF]
        "
      >
        View All News
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
