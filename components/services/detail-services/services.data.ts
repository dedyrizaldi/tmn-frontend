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
    image: "/images/services/tank_cleaning.jpg",
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
    image: "/images/services/tank-washing.jpg",
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
    image: "/images/services/disposal-handling.jpg",
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
    slug: "pumping",
    key: "pumping",
    image: "/images/services/pumping.png",
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
    image: "/images/services/rafting_mopping.jpg",
    icon: ShieldCheck,
    category: "Environment",

    features: [
      "Hazardous Waste",
      "Industrial Waste",
      "Transportation",
      "Environmental Compliance",
    ],
  },
  {
    slug: "disposal-handling",
    key: "disposalHandling",
    image: "/images/services/sludge-removal.jpg",
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
