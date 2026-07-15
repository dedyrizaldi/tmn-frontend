export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  shortDescription: string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Tank Cleaning",
    slug: "tank-cleaning",
    image: "/images/services/tank-cleaning.jpg",
    shortDescription:
      "Professional cleaning for storage tanks, ships, offshore and industrial facilities.",
  },
  {
    id: 2,
    title: "Tank Washing",
    slug: "tank-washing",
    image: "/images/services/tank-washing.jpg",
    shortDescription:
      "Chemical and hot water tank washing for industrial cleaning.",
  },
  {
    id: 3,
    title: "Pumping",
    slug: "pumping",
    image: "/images/services/pumping.jpg",
    shortDescription:
      "High-capacity hydraulic and submersible pumping services.",
  },
  {
    id: 4,
    title: "Rafting & Mopping",
    slug: "rafting",
    image: "/images/services/rafting.jpg",
    shortDescription:
      "Cleaning from top to bottom inside confined space tanks.",
  },
  {
    id: 5,
    title: "Sludge Removal",
    slug: "sludge-removal",
    image: "/images/services/sludge-removal.jpg",
    shortDescription:
      "Safe removal of sludge using modern industrial equipment.",
  },
  {
    id: 6,
    title: "Disposal Handling",
    slug: "disposal-handling",
    image: "/images/services/disposal-handling.jpg",
    shortDescription: "Hazardous waste transportation and disposal management.",
  },
];
