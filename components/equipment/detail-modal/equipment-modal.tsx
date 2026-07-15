"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

import EquipmentModalApplication from "./equipment-modal-application";
import EquipmentModalCTA from "./equipment-modal-cta";
import EquipmentModalFeature from "./equipment-modal-feature";
import EquipmentModalGallery from "./equipment-modal-gallery";
import EquipmentModalHeader from "./equipment-modal-header";
import EquipmentModalSpecs from "./equipment-modal-specs";

interface Props {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  equipment: any;
  onClose: () => void;
}

export default function EquipmentModal({ open, equipment, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

        p-5
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative

          h-[92vh]

          w-full

          max-w-6xl

          overflow-y-auto

          rounded-[30px]

          bg-white
        "
      >
        <button
          onClick={onClose}
          className="
            absolute

            right-5

            top-5

            z-50

            flex

            h-11

            w-11

            items-center

            justify-center

            rounded-full

            bg-white

            shadow-lg
          "
        >
          <X size={18} />
        </button>

        <EquipmentModalHeader equipment={equipment} />

        <EquipmentModalSpecs equipment={equipment} />

        <EquipmentModalFeature equipment={equipment} />

        <EquipmentModalApplication equipment={equipment} />

        <EquipmentModalGallery equipment={equipment} />

        <EquipmentModalCTA equipment={equipment} />
      </div>
    </div>
  );
}
