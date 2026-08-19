"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  /**
   * =========================================================
   * TAMPILKAN MODAL SETIAP KALI HOME DIBUKA
   * =========================================================
   */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /**
   * =========================================================
   * TUTUP MODAL
   * =========================================================
   */

  const closeModal = () => {
    setOpen(false);
  };

  /**
   * =========================================================
   * TOMBOL ESC
   * =========================================================
   */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  /**
   * =========================================================
   * LOCK BODY SCROLL
   * =========================================================
   */

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  /**
   * =========================================================
   * MODAL BELUM DIBUKA
   * =========================================================
   */

  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-[#04162E]/75

        p-4
        sm:p-6

        backdrop-blur-sm
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="tmn-welcome-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      {/* =====================================================
          MODAL
      ===================================================== */}

      <div
        className="
          relative

          w-full
          max-w-[520px]

          overflow-hidden

          rounded-[28px]

          bg-white

          shadow-2xl
        "
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        {/* ===================================================
            GARIS ATAS
        =================================================== */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-10

            h-1

            bg-[#156CFF]
          "
        />

        {/* ===================================================
            TOMBOL CLOSE
        =================================================== */}

        <button
          type="button"
          onClick={closeModal}
          aria-label="Tutup sambutan"
          className="
            absolute
            right-4
            top-4
            z-30

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            bg-white/90

            text-[#04162E]

            shadow-md

            backdrop-blur-sm

            transition-all
            duration-200

            hover:bg-[#156CFF]
            hover:text-white

            focus:outline-none
            focus:ring-2
            focus:ring-[#156CFF]
            focus:ring-offset-2

            sm:right-5
            sm:top-5
          "
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* ===================================================
            LOGO / GIF
        =================================================== */}

        <div
          className="
            flex
            min-h-[210px]

            items-center
            justify-center

            bg-slate-50

            px-6
            pb-8
            pt-10

            sm:min-h-[250px]
            sm:px-10
            sm:pb-10
            sm:pt-12
          "
        >
          <div
            className="
              flex
              w-full
              items-center
              justify-center
            "
          >
            <Image
              src="/logo/tmn_g.gif"
              alt="PT Tirta Mega Nusantara"
              width={300}
              height={170}
              unoptimized
              priority
              className="
                h-auto

                max-h-[140px]
                w-auto
                max-w-[250px]

                object-contain

                sm:max-h-[170px]
                sm:max-w-[300px]
              "
            />
          </div>
        </div>

        {/* ===================================================
            KONTEN
        ===================================================== */}

        <div
          className="
            px-6
            pb-7
            pt-7

            text-center

            sm:px-10
            sm:pb-9
            sm:pt-8
          "
        >
          {/* =================================================
              LABEL
          ================================================= */}

          <p
            className="
              text-[11px]

              font-bold

              uppercase

              tracking-[0.3em]

              text-[#156CFF]

              sm:text-xs
            "
          >
            Selamat Datang di Website
          </p>

          {/* =================================================
              TITLE
          ================================================= */}

          <h2
            id="tmn-welcome-title"
            className="
              mt-3

              text-2xl

              font-bold

              leading-tight

              tracking-tight

              text-[#04162E]

              sm:text-3xl
            "
          >
            PT Tirta Mega Nusantara
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mx-auto

              mt-4

              max-w-[420px]

              text-sm

              leading-6

              text-slate-500

              sm:text-[15px]
              sm:leading-7
            "
          >
            Kami hadir sebagai mitra terpercaya dalam menyediakan layanan
            profesional untuk kebutuhan industrial cleaning, tank cleaning,
            pengelolaan limbah, dan layanan lingkungan.
          </p>

          {/* =================================================
              BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={closeModal}
            className="
              mt-7

              inline-flex

              min-h-12

              w-full

              items-center
              justify-center

              rounded-xl

              bg-[#156CFF]

              px-6

              text-sm

              font-semibold

              text-white

              shadow-sm

              transition-all
              duration-200

              hover:bg-[#0d5bd7]
              hover:shadow-lg

              focus:outline-none
              focus:ring-2
              focus:ring-[#156CFF]
              focus:ring-offset-2

              sm:w-auto
              sm:min-w-[190px]
            "
          >
            Mulai Menjelajah
          </button>
        </div>
      </div>
    </div>
  );
}
