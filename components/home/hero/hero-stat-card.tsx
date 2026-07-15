import { motion } from "motion/react";

interface HeroStatCardProps {
  value: string;
  label: string;
  description: string;
}

export default function HeroStatCard({
  value,
  label,
  description,
}: HeroStatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-7
        shadow-lg
        transition-all
        duration-300
        hover:border-[#0066D9]/20
        hover:shadow-2xl
      "
    >
      {/* Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          bg-[#0066D9]
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
      />

      <h3
        className="
          text-4xl
          font-black
          tracking-tight
          text-[#0066D9]
        "
      >
        {value}
      </h3>

      <h4
        className="
          mt-3
          text-lg
          font-semibold
          text-slate-900
        "
      >
        {label}
      </h4>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-slate-500
        "
      >
        {description}
      </p>
    </motion.div>
  );
}
