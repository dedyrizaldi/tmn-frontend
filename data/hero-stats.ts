export interface HeroStat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: "calendar" | "folder" | "shield" | "clock";
}

export const heroStats: HeroStat[] = [
  {
    id: 1,
    value: 19,
    suffix: "+",
    label: "Years Experience",
    icon: "calendar",
  },
  {
    id: 2,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    icon: "folder",
  },
  {
    id: 3,
    value: 0,
    suffix: "",
    label: "Major Accident",
    icon: "shield",
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    label: "Emergency Response",
    icon: "clock",
  },
];
