"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import type { Equipment } from "@/types/equipment";

import EquipmentModalGallery from "./equipment-modal-gallery";

interface Props {
  open: boolean;
  equipment: Equipment | null;
  onClose: () => void;
}

export default function EquipmentModal({ open, equipment, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !equipment) return null;

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
        backdrop-blur-sm
        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          bg-white
          shadow-2xl
        "
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="
            absolute
            right-4
            top-4
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
            duration-200
            hover:scale-105
            hover:bg-slate-100
          "
        >
          <X size={20} />
        </button>

        <EquipmentModalGallery equipment={equipment} />
      </div>
    </div>
  );
}
