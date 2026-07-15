import {
  Droplets,
  Waves,
  Truck,
  Factory,
  Wrench,
  ShieldCheck,
} from "lucide-react";

export const services = [
  {
    slug: "tank-cleaning",

    title: "Tank Cleaning",

    shortDescription:
      "Professional cleaning of storage tanks from sludge, scale and hydrocarbon residue.",

    description:
      "Our Tank Cleaning service removes sludge, scale, sediments, and hydrocarbon residues safely and efficiently using modern equipment and certified personnel to restore tank performance and safety.",

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

    title: "Tank Washing",

    shortDescription: "High pressure washing for industrial tanks and vessels.",

    description:
      "High pressure water jet cleaning system designed to remove dirt, oil, grease, and residues from tanks and industrial equipment safely and efficiently.",

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

    title: "Sludge Removal",

    shortDescription:
      "Safe sludge removal from tanks, ponds and industrial facilities.",

    description:
      "Professional sludge removal service using vacuum systems and pumping equipment to minimize downtime while maintaining environmental compliance.",

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

    title: "Industrial Cleaning",

    shortDescription:
      "Comprehensive cleaning solutions for industrial facilities.",

    description:
      "Cleaning of factories, plants, refineries, marine facilities and industrial equipment using professional methods that meet international safety standards.",

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

    title: "Pumping",

    shortDescription:
      "Industrial pumping service for liquid, sludge and waste transfer.",

    description:
      "High-capacity pumping services for sludge, liquid waste, chemicals, and industrial fluids using reliable pumping systems.",

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

    title: "Waste Management",

    shortDescription: "Integrated hazardous and industrial waste management.",

    description:
      "Comprehensive waste management services including collection, transportation, treatment, and environmentally responsible disposal according to regulations.",

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
];
