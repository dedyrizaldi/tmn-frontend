export interface ProjectItem {
  image: string;
  category: string;
  client: string;
  location: string;
  status: "completed" | "ongoing";
  slug: string;
}

export const projects: ProjectItem[] = [
  {
    image: "/images/services/tank-cleaning.png",
    category: "tankCleaning",
    client: "Pertamina RU IV",
    location: "Cilacap",
    status: "completed",
    slug: "pertamina-ru-iv",
  },
  {
    image: "/images/services/sludge-removal.png",
    category: "sludgeRemoval",
    client: "Pelindo Terminal",
    location: "Jakarta",
    status: "completed",
    slug: "pelindo-terminal",
  },
  {
    image: "/images/services/rafting.png",
    category: "marineCleaning",
    client: "Vopak Terminal",
    location: "Merak",
    status: "ongoing",
    slug: "vopak-terminal",
  },
  {
    image: "/images/services/disposal-handling.png",
    category: "wasteManagement",
    client: "AKR Fuel Terminal",
    location: "Surabaya",
    status: "completed",
    slug: "akr-fuel-terminal",
  },
  {
    image: "/images/services/disposal-handling.png",
    category: "wasteManagement",
    client: "AKR Fuel Terminal",
    location: "Surabaya",
    status: "completed",
    slug: "akr-fuel-terminal",
  },
  {
    image: "/images/services/disposal-handling.png",
    category: "wasteManagement",
    client: "AKR Fuel Terminal",
    location: "Surabaya",
    status: "completed",
    slug: "akr-fuel-terminal",
  },
  {
    image: "/images/services/disposal-handling.png",
    category: "wasteManagement",
    client: "AKR Fuel Terminal",
    location: "Surabaya",
    status: "completed",
    slug: "akr-fuel-terminal",
  },
  {
    image: "/images/services/disposal-handling.png",
    category: "wasteManagement",
    client: "AKR Fuel Terminal",
    location: "Surabaya",
    status: "completed",
    slug: "akr-fuel-terminal",
  },
  {
    image: "/images/services/disposal-handling.png",
    category: "wasteManagement",
    client: "AKR Fuel Terminal",
    location: "Surabaya",
    status: "completed",
    slug: "akr-fuel-terminal",
  },
];
