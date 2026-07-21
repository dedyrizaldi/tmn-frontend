export interface EquipmentCategory {
  id: number;
  name: string;
  slug: string;
}

export interface EquipmentGallery {
  id: number;
  name: string;
  url: string;
}

export interface Equipment {
  id: number;
  title: string | null;
  name?: string;
  slug: string;

  excerpt: string;
  description: string;

  thumbnail: string | null;
  gallery: EquipmentGallery[];

  category: EquipmentCategory;

  brand?: string;
  model?: string;

  specifications?: Record<string, string>;
  applications?: string[];

  featured: boolean;
  status: string;

  meta_title: string | null;
  meta_description: string | null;

  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface PaginationMeta {
  current_page: number | number[];
  from: number | number[];
  last_page: number | number[];
  links: PaginationLink[];
  path: string;
  per_page: number | number[];
  to: number | number[];
  total: number | number[];
}

export interface PaginationLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface EquipmentResponse {
  success: boolean;
  message: string;
  data: Equipment[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface EquipmentDetailResponse {
  success: boolean;
  message: string;
  data: Equipment;
}
