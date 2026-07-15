"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import ServiceModalHeader from "./service-modal-header";
import ServiceModalOverview from "./service-modal-overview";
import ServiceModalFeatures from "./service-modal-features";
import ServiceModalGallery from "./service-modal-gallery";
import ServiceModalCTA from "./service-modal-cta";

interface Props {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  service: any;
  onClose: () => void;
}

export default function ServiceModal({ open, service, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !service) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-md
        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative

          flex

          h-[92vh]

          w-full

          max-w-7xl

          flex-col

          overflow-hidden

          rounded-[32px]

          bg-white

          shadow-[0_20px_80px_rgba(0,0,0,.35)]

          animate-in

          fade-in

          zoom-in-95

          duration-300
        "
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute

            right-6

            top-6

            z-50

            flex

            h-11

            w-11

            items-center

            justify-center

            rounded-full

            bg-white

            shadow-lg

            transition-all

            duration-300

            hover:rotate-90

            hover:bg-[#156CFF]

            hover:text-white
          "
        >
          <X size={20} />
        </button>

        {/* Content */}

        <div
          className="
            flex-1

            overflow-y-auto

            scrollbar-thin

            scrollbar-thumb-slate-300

            scrollbar-track-transparent
          "
        >
          <ServiceModalHeader service={service} />

          <ServiceModalOverview service={service} />

          <ServiceModalFeatures />

          <ServiceModalGallery service={service} />

          <ServiceModalCTA service={service} />
        </div>
      </div>
    </div>
  );
}
