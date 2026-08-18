"use client";

import { FileText } from "lucide-react";
import { motion } from "motion/react";

import { Link } from "@/i18n/navigation";

function WhatsAppIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16.002 3.2C8.93 3.2 3.2 8.93 3.2 16.002c0 2.26.592 4.38 1.628 6.22L3.2 28.8l6.76-1.602a12.73 12.73 0 0 0 6.042 1.526h.006c7.07 0 12.792-5.73 12.792-12.802C28.8 8.93 23.072 3.2 16.002 3.2Z"
        fill="white"
      />

      <path
        d="M23.478 18.72c-.4-.2-2.362-1.164-2.728-1.296-.366-.136-.632-.2-.898.2-.266.4-1.03 1.296-1.264 1.562-.232.266-.466.3-.864.1-.4-.2-1.686-.62-3.21-1.98-1.186-1.058-1.986-2.364-2.22-2.764-.232-.4-.024-.616.176-.814.18-.18.4-.466.6-.698.2-.234.266-.4.4-.666.132-.266.066-.5-.034-.7-.1-.2-.898-2.164-1.23-2.964-.324-.78-.654-.674-.898-.686-.232-.012-.5-.014-.764-.014-.266 0-.698.1-1.064.5-.366.4-1.396 1.364-1.396 3.326 0 1.964 1.43 3.862 1.63 4.128.2.266 2.814 4.298 6.818 6.028.952.412 1.694.658 2.274.842.956.304 1.826.26 2.514.158.768-.114 2.362-.966 2.696-1.898.332-.932.332-1.73.232-1.898-.1-.166-.366-.266-.764-.466Z"
        fill="#25D366"
      />
    </svg>
  );
}

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
          aria-label="Chat with us on WhatsApp"
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
          <div
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              transition-transform
              group-hover:rotate-6
            "
          >
            <WhatsAppIcon size={28} />
          </div>

          <div>
            <p className="text-xs opacity-80">Need Help?</p>

            <p className="font-semibold">WhatsApp</p>
          </div>
        </motion.a>
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
        {/* WhatsApp */}

        <motion.a
          href="https://wa.me/6281294366116"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
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
          <WhatsAppIcon size={25} />
        </motion.a>
      </div>
    </>
  );
}
