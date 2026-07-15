export interface WhyItem {
  icon: "shield" | "award" | "settings" | "zap" | "leaf" | "target";

  title: string;

  description: string;
}

export const whyItems: WhyItem[] = [
  {
    icon: "shield",
    title: "safety.title",
    description: "safety.description",
  },
  {
    icon: "award",
    title: "certified.title",
    description: "certified.description",
  },
  {
    icon: "settings",
    title: "equipment.title",
    description: "equipment.description",
  },
  {
    icon: "zap",
    title: "response.title",
    description: "response.description",
  },
  {
    icon: "leaf",
    title: "environment.title",
    description: "environment.description",
  },
  {
    icon: "target",
    title: "zero.title",
    description: "zero.description",
  },
];
