"use client";

import { Award, Leaf, Settings, ShieldCheck, Target, Zap } from "lucide-react";

import { motion } from "motion/react";

interface Props {
  icon: "shield" | "award" | "settings" | "zap" | "leaf" | "target";

  title: string;

  description: string;
}

export default function WhyCard({ icon, title, description }: Props) {
  const icons = {
    shield: ShieldCheck,
    award: Award,
    settings: Settings,
    zap: Zap,
    leaf: Leaf,
    target: Target,
  };

  const Icon = icons[icon];

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        hover:shadow-xl
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          text-[#0066D9]
        "
      >
        <Icon size={32} />
      </div>

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </motion.div>
  );
}
