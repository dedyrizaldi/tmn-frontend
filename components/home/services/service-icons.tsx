import { Droplets, Fuel, Shield, ShipWheel, Trash2 } from "lucide-react";

interface Props {
  icon: "tank" | "wash" | "pump" | "raft" | "waste";
  className?: string;
}

export default function ServiceIcon({ icon, className = "" }: Props) {
  const iconClass = `
    h-10
    w-10

    text-[#156CFF]

    sm:h-11
    sm:w-11

    lg:h-12
    lg:w-12

    ${className}
  `;

  switch (icon) {
    case "tank":
      return <Fuel className={iconClass} strokeWidth={2} />;

    case "wash":
      return <Droplets className={iconClass} strokeWidth={2} />;

    case "pump":
      return <Shield className={iconClass} strokeWidth={2} />;

    case "raft":
      return <ShipWheel className={iconClass} strokeWidth={2} />;

    case "waste":
      return <Trash2 className={iconClass} strokeWidth={2} />;

    default:
      return <Fuel className={iconClass} strokeWidth={2} />;
  }
}
