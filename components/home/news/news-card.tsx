import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface Props {
  image: string;
  title: string;
  date: string;
  slug: string;
}

export default function NewsCard({ image, title, date, slug }: Props) {
  return (
    <Link
      href={`/news/${slug}`}
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Image */}
      <div className="relative h-[120px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-[11px] text-slate-500">{date}</p>

        <h3 className="mt-2 line-clamp-2 text-[14px] font-semibold leading-5 text-slate-900">
          {title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-[#156CFF]">
          Read More
          <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  );
}
