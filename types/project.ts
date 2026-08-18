export interface ProjectCategory {
  id: number;
  name: string;
  slug: string;
}

export interface ProjectGallery {
  id: number;
  name: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  client: string;
  location: string;
  project_date: string;
  excerpt: string;
  description: string;
  thumbnail: string;

  /**
   * Surat pengalaman project.
   * Berisi URL gambar surat atau null
   * jika belum tersedia.
   */
  experience_letter: string | null;

  gallery: ProjectGallery[];
  category: ProjectCategory;
  featured: boolean;
  status: string;
  meta_title: string;
  meta_description: string;
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
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface ProjectResponse {
  success: boolean;
  message: string;
  data: Project[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface ProjectDetailResponse {
  data: Project;
}

export interface ProjectCategoryResponse {
  success: boolean;
  message: string;
  data: ProjectCategory[];
}
