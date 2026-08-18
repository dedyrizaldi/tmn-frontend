import {
  Droplets,
  Factory,
  ShieldCheck,
  Truck,
  Wrench,
  Waves,
} from "lucide-react";

export const services = [
  {
    slug: "tank-cleaning",
    key: "tankCleaning",
    image: "/images/services/tank-cleaning.png",
    icon: Droplets,
    category: "Cleaning",
    features: [
      "Storage Tank Cleaning",
      "Oil & Gas Facilities",
      "Chemical Tanks",
      "Marine Tank Cleaning",
    ],
  },

  {
    slug: "tank-washing",
    key: "tankWashing",
    image: "/images/services/tank-washing.png",
    icon: Waves,
    category: "Cleaning",
    features: [
      "High Pressure Jetting",
      "Chemical Washing",
      "Fresh Water Cleaning",
      "Internal Tank Washing",
    ],
  },

  {
    slug: "sludge-removal",
    key: "sludgeRemoval",
    image: "/images/services/sludge-removal.png",
    icon: Truck,
    category: "Waste",
    features: [
      "Vacuum Truck",
      "Waste Collection",
      "Safe Transportation",
      "Certified Disposal",
    ],
  },

  {
    slug: "industrial-cleaning",
    key: "industrialCleaning",
    image: "/images/services/pumping.png",
    icon: Factory,
    category: "Industrial",
    features: [
      "Factory Cleaning",
      "Refinery Cleaning",
      "Plant Shutdown",
      "Maintenance Cleaning",
    ],
  },

  {
    slug: "pumping",
    key: "pumping",
    image: "/images/services/tank-washing.png",
    icon: Wrench,
    category: "Industrial",
    features: [
      "Liquid Transfer",
      "Sludge Pumping",
      "Chemical Pumping",
      "Emergency Response",
    ],
  },

  {
    slug: "waste-management",
    key: "wasteManagement",
    image: "/images/services/sludge-removal.png",
    icon: ShieldCheck,
    category: "Environment",
    features: [
      "Hazardous Waste",
      "Industrial Waste",
      "Transportation",
      "Environmental Compliance",
    ],
  },
] as const;
