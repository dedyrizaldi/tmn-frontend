"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "motion/react";

export default function AboutVideo() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative

        w-full
        max-w-[320px]

        overflow-hidden

        rounded-[20px]

        shadow-[0_18px_45px_rgba(15,23,42,.12)]

        sm:max-w-[380px]

        lg:max-w-[470px]

        lg:rounded-[24px]

        lg:shadow-[0_25px_60px_rgba(15,23,42,.12)]
      "
    >
      {/* Image */}

      <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.45 }}>
        <Image
          src="/logo/logo-icon.png"
          alt="PT Tirta Mega Nusantara"
          width={470}
          height={470}
          priority
          className="
            h-auto
            w-full
            object-cover
            transition-transform
            duration-500
          "
        />
      </motion.div>

      {/* Play Button */}

      <button
        type="button"
        className="
          absolute
          left-1/2
          top-1/2

          flex

          h-14
          w-14

          -translate-x-1/2
          -translate-y-1/2

          items-center
          justify-center

          rounded-full

          bg-white/90

          text-[#156CFF]

          shadow-xl

          backdrop-blur

          transition-all
          duration-300

          group-hover:scale-110

          sm:h-16
          sm:w-16
        "
      >
        <Play className="ml-1" size={20} fill="currentColor" />
      </button>

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t

          from-black/20

          via-transparent

          to-transparent
        "
      />
    </motion.div>
  );
}
