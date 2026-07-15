import Image from "next/image";

interface Props {
  image: string;
  active: boolean;
  onClick: () => void;
}

export default function EquipmentGalleryThumb({
  image,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        h-24
        overflow-hidden
        rounded-2xl
        transition-all
        duration-300

        ${active ? "ring-4 ring-[#156CFF]" : "opacity-70 hover:opacity-100"}
      `}
    >
      <Image src={image} alt="" fill className="object-cover" />
    </button>
  );
}
