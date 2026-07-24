import type { Equipment } from "./equipment";
import type { News } from "./news";
import type { Project } from "./project";

export interface HomeData {
  featured_news: News[];
  latest_news: News[];
  featured_projects: Project[];
  featured_equipment: Equipment[];
}

export interface HomeResponse {
  success: boolean;
  message: string;
  data: HomeData;
}
