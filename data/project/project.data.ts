import type { Project } from "@/types/project";

export const projectData: Project[] = [
  {
    id: 1,
    slug: "tank-cleaning-pertamina-balikpapan",
    title: "Tank Cleaning Project",
    client: "PT Pertamina RU V",
    category: "Tank Cleaning",
    location: "Balikpapan",
    year: 2025,
    duration: "15 Days",

    description:
      "Complete storage tank cleaning including sludge removal, high pressure water jetting, waste handling, and final inspection according to industrial safety standards.",

    thumbnail: "/images/project/project-1.png",
    heroImage: "/images/project/project-1.png",

    gallery: [
      {
        image: "/images/project/gallery/project-1-1.png",
        type: "before",
      },
      {
        image: "/images/project/gallery/project-1-2.png",
        type: "progress",
      },
      {
        image: "/images/project/gallery/project-1-3.png",
        type: "after",
      },
    ],

    services: ["Tank Cleaning", "Sludge Removal", "Waste Handling"],

    equipment: ["Vacuum Truck", "Water Jet", "Pump Unit"],

    scope: [
      "Mobilization",
      "Gas Free Test",
      "Tank Cleaning",
      "Sludge Removal",
      "Waste Transportation",
      "Final Inspection",
    ],

    results: [
      {
        title: "Zero Incident",
        description: "Project completed safely without accidents.",
      },
      {
        title: "Reduced Downtime",
        description: "Completed ahead of schedule.",
      },
      {
        title: "Environmental Compliance",
        description: "Waste handled according to regulations.",
      },
    ],

    timeline: [
      {
        title: "Mobilization",
        date: "Day 1",
      },
      {
        title: "Cleaning",
        date: "Day 2-10",
      },
      {
        title: "Inspection",
        date: "Day 11-14",
      },
      {
        title: "Completion",
        date: "Day 15",
      },
    ],
  },

  {
    id: 2,
    slug: "industrial-cleaning-pltu",
    title: "Industrial Cleaning Shutdown",
    client: "PLTU Indonesia Power",
    category: "Industrial Cleaning",
    location: "Surabaya",
    year: 2025,
    duration: "10 Days",

    description:
      "Industrial shutdown cleaning using vacuum truck and hydro jet equipment.",

    thumbnail: "/images/project/project-2.png",
    heroImage: "/images/project/project-2.png",

    gallery: [],

    services: ["Industrial Cleaning", "Hydro Jetting"],

    equipment: ["Water Jet", "Vacuum Truck"],

    scope: ["Shutdown Cleaning", "Boiler Cleaning", "Inspection"],

    results: [
      {
        title: "On Time",
        description: "Completed according to shutdown schedule.",
      },
    ],

    timeline: [
      {
        title: "Preparation",
        date: "Day 1",
      },
      {
        title: "Cleaning",
        date: "Day 2-8",
      },
      {
        title: "Inspection",
        date: "Day 9",
      },
      {
        title: "Finish",
        date: "Day 10",
      },
    ],
  },

  {
    id: 3,
    slug: "industrial-waste-management",
    title: "Industrial Waste Management",
    client: "PT Kawasan Industri",
    category: "Waste Management",
    location: "Jakarta",
    year: 2024,
    duration: "20 Days",

    description:
      "Integrated industrial waste collection and transportation service.",

    thumbnail: "/images/project/project-3.png",
    heroImage: "/images/project/project-3.png",

    gallery: [],

    services: ["Waste Management"],

    equipment: ["Vacuum Truck", "Waste Container"],

    scope: ["Collection", "Transportation", "Disposal"],

    results: [
      {
        title: "Certified Disposal",
        description: "Waste disposed according to government regulations.",
      },
    ],

    timeline: [
      {
        title: "Execution",
        date: "20 Days",
      },
    ],
  },

  {
    id: 4,
    slug: "oil-sludge-removal",
    title: "Oil Sludge Removal",
    client: "PT Kilang Cilacap",
    category: "Sludge Removal",
    location: "Cilacap",
    year: 2024,
    duration: "12 Days",

    description:
      "Removal of accumulated oil sludge using industrial vacuum systems.",

    thumbnail: "/images/project/project-4.png",
    heroImage: "/images/project/project-4.png",

    gallery: [],

    services: ["Sludge Removal"],

    equipment: ["Vacuum Truck"],

    scope: ["Extraction", "Transportation", "Cleaning"],

    results: [
      {
        title: "Tank Restored",
        description: "Tank restored to operational condition.",
      },
    ],

    timeline: [
      {
        title: "Execution",
        date: "12 Days",
      },
    ],
  },

  {
    id: 5,
    slug: "pipeline-hydrotest",
    title: "Pipeline Hydrotest",
    client: "PT Krakatau Steel",
    category: "Hydrotest",
    location: "Cilegon",
    year: 2024,
    duration: "7 Days",

    description:
      "Hydrostatic pressure testing for industrial pipeline systems.",

    thumbnail: "/images/project/project-5.png",
    heroImage: "/images/project/project-5.png",

    gallery: [],

    services: ["Hydrotest"],

    equipment: ["Pump Unit", "Water Jet"],

    scope: ["Pressure Test", "Leak Detection", "Certification"],

    results: [
      {
        title: "Passed Test",
        description: "Pipeline successfully passed pressure testing.",
      },
    ],

    timeline: [
      {
        title: "Testing",
        date: "7 Days",
      },
    ],
  },

  {
    id: 6,
    slug: "vacuum-truck-operation",
    title: "Vacuum Truck Operation",
    client: "Chevron Indonesia",
    category: "Vacuum Truck",
    location: "Balikpapan",
    year: 2023,
    duration: "8 Days",

    description:
      "Industrial liquid waste removal using high-capacity vacuum trucks.",

    thumbnail: "/images/project/project-6.png",
    heroImage: "/images/project/project-6.png",

    gallery: [],

    services: ["Vacuum Truck"],

    equipment: ["Vacuum Truck"],

    scope: ["Waste Suction", "Transportation"],

    results: [
      {
        title: "Fast Response",
        description: "Completed according to client schedule.",
      },
    ],

    timeline: [
      {
        title: "Execution",
        date: "8 Days",
      },
    ],
  },
];
