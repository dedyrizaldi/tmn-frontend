export interface MediaGallery {
  id: number;
  name: string;
  url: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface NewsItem {
  id: number;
  title: string;
  slug: string;
  author: string;
  excerpt: string;
  content: string;

  thumbnail: string;

  gallery: MediaGallery[];

  category: Category;

  featured: boolean;

  status: string;

  meta_title: string;

  meta_description: string;

  published_at: string;

  created_at: string;

  updated_at: string;
}

export interface ProjectItem {
  id: number;

  title: string;

  slug: string;

  client: string;

  location: string;

  project_date: string | null;

  excerpt: string;

  description: string;

  thumbnail: string;

  gallery: MediaGallery[];

  category: Category;

  featured: boolean;

  status: string;

  meta_title: string;

  meta_description: string;

  published_at: string;

  created_at: string;

  updated_at: string;
}

export interface EquipmentItem {
  id: number;

  title: string;

  slug: string;

  excerpt: string;

  description: string;

  thumbnail: string;

  gallery: MediaGallery[];

  category: Category;

  featured: boolean;

  status: string;

  meta_title: string;

  meta_description: string;

  published_at: string;

  created_at: string;

  updated_at: string;
}

export interface HomeData {
  featured_news: NewsItem[];

  latest_news: NewsItem[];

  featured_projects: ProjectItem[];

  featured_equipment: EquipmentItem[];
}

export interface HomeResponse {
  success: boolean;

  message: string;

  data: HomeData;
}

// types/home-project.ts

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
  gallery: {
    image: string;
    type: string;
  }[];
  services: string[];
  equipment: string[];
  scope: string[];
  results: {
    title: string;
    description: string;
  }[];
  timeline: {
    title: string;
    date: string;
  }[];
}
