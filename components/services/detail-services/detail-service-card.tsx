import Image from "next/image";
import { ArrowRight, LucideIcon } from "lucide-react";

interface Props {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export default function DetailServiceCard({
  title,
  description,
  image,
  icon: Icon,
  onClick,
}: Props) {
  return (
    <article
      onClick={onClick}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-[9px]
        border
        border-slate-200
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#156CFF]
        hover:shadow-[0_20px_50px_rgba(0,0,0,.08)]
      "
    >
      {/* Image */}

      <div
        className="
          relative
          h-36
          overflow-hidden
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="25vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/25
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="relative px-6 pb-7 pt-8">
        {/* Floating Icon */}

        <div
          className="
            absolute
            -top-7
            left-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-100
            bg-white
            text-[#156CFF]
            shadow-lg
            transition-all
            duration-300
            group-hover:bg-[#156CFF]
            group-hover:text-white
          "
        >
          <Icon size={28} />
        </div>

        {/* Title */}

        <h3
          className="
            text-[15px]
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
            min-h-[96px]
            text-[11px]
            leading-6
            text-slate-600
          "
        >
          {description}
        </p>

        {/* Button */}

        <button
          type="button"
          onClick={onClick}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-[11px]
            font-semibold
            text-[#156CFF]
            transition-colors
            hover:text-[#0E5DE8]
          "
        >
          Lihat Detail
          <ArrowRight
            size={14}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>
      </div>
    </article>
  );
}
