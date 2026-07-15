import { LucideIcon } from "lucide-react";

export interface Equipment {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];

  category: string;
  application: string;
  applications: string[];

  capacity: string;
  status: "available" | "maintenance";

  engine: string;
  power: string;
  pump: string;
  drive: string;
  fuel: string;
  transmission: string;
  weight: string;

  features: {
    title: string;
    description: string;
  }[];

  icon?: LucideIcon;
}
