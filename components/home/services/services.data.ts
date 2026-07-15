export interface ServiceItem {
  image: string;
  icon: "tank" | "wash" | "pump" | "raft" | "waste";
  title: string;
  description: string;
  href: string;
}

export const services: ServiceItem[] = [
  {
    image: "/images/services/tank-cleaning.png",
    icon: "tank",
    title: "tankCleaning.title",
    description: "tankCleaning.description",
    href: "/services/tank-cleaning",
  },
  {
    image: "/images/services/tank-washing.png",
    icon: "wash",
    title: "tankWashing.title",
    description: "tankWashing.description",
    href: "/services/tank-washing",
  },
  {
    image: "/images/services/pumping.png",
    icon: "pump",
    title: "pumping.title",
    description: "pumping.description",
    href: "/services/pumping",
  },
  {
    image: "/images/services/rafting.png",
    icon: "raft",
    title: "rafting.title",
    description: "rafting.description",
    href: "/services/rafting",
  },
  {
    image: "/images/services/disposal-handling.png",
    icon: "waste",
    title: "disposal.title",
    description: "disposal.description",
    href: "/services/disposal",
  },
];
