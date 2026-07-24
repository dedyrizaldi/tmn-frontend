export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
}

export interface NewsGallery {
  id: number;
  name: string;
  url: string;
}

export interface News {
  id: number;
  title: string;
  slug: string;
  author: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  gallery: NewsGallery[];
  category: NewsCategory;
  featured: boolean;
  status: "draft" | "published";
  sort_order: number;
  meta_title: string;
  meta_description: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface PaginationMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
}

export interface NewsResponse {
  success: boolean;
  message: string;
  data: News[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface NewsDetailResponse {
  success: boolean;
  message: string;
  data: News;
}

export interface NewsCategoryResponse {
  success: boolean;
  message: string;
  data: NewsCategory[];
}
