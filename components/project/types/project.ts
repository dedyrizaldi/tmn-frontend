export interface ProjectGallery {
  image: string;
  title?: string;
  type?: "before" | "after" | "progress";
}

export interface ProjectResult {
  title: string;
  description: string;
}

export interface ProjectTimeline {
  title: string;
  date: string;
}

export interface Project {
  id: number;

  slug: string;

  title: string;

  client: string;

  category: string;

  location: string;

  year: number;

  duration: string;

  description: string;

  thumbnail: string;

  heroImage: string;

  gallery: ProjectGallery[];

  services: string[];

  equipment: string[];

  scope: string[];

  results: ProjectResult[];

  timeline: ProjectTimeline[];
}
