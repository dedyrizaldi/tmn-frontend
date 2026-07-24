"use client";

import { FileText, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

import { Link } from "@/i18n/navigation";

export default function FloatingActions() {
  return (
    <>
      {/* ========================= */}
      {/* Desktop */}
      {/* ========================= */}

      <div
        className="
          fixed
          bottom-8
          right-8
          z-50

          hidden

          xl:flex
          flex-col
          gap-4
        "
      >
        {/* WhatsApp */}

        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            x: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            group
            flex
            items-center
            gap-3

            rounded-2xl

            bg-[#25D366]

            px-5
            py-4

            text-white

            shadow-xl

            transition-all
          "
        >
          <MessageCircle
            size={22}
            className="transition-transform group-hover:rotate-12"
          />

          <div>
            <p className="text-xs opacity-80">Need Help?</p>

            <p className="font-semibold">WhatsApp</p>
          </div>
        </motion.a>

        {/* Quote */}

        {/* <Link href="/quote">
          <motion.div
            whileHover={{
              scale: 1.05,
              x: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              flex
              cursor-pointer
              items-center
              gap-3

              rounded-2xl

              bg-[#156CFF]

              px-5
              py-4

              text-white

              shadow-xl

              transition-all

              hover:bg-[#0E5ED9]
            "
          >
            <FileText
              size={22}
              className="transition-transform group-hover:rotate-12"
            />

            <div>
              <p className="text-xs opacity-80">Free Consultation</p>

              <p className="font-semibold">Request Quote</p>
            </div>
          </motion.div>
        </Link> */}
      </div>

      {/* ========================= */}
      {/* Mobile FAB */}
      {/* ========================= */}

      <div
        className="
          fixed
          bottom-5
          right-5
          z-50

          flex
          flex-col
          gap-3

          xl:hidden
        "
      >
        {/* Quote */}

        {/* <Link href="/quote">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              bg-[#156CFF]

              text-white

              shadow-xl
            "
          >
            <FileText size={20} />
          </motion.div>
        </Link> */}

        {/* WhatsApp */}

        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            bg-[#25D366]

            text-white

            shadow-xl
          "
        >
          <MessageCircle size={20} />
        </motion.a>
      </div>
    </>
  );
}
