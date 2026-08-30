export interface ProjectGallery {
  id: number;
  name: string;
  url: string;
}

export interface ProjectCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Project {
  id: number;

  /**
   * Nama kapal
   */
  title: string;

  slug: string;

  /**
   * Nama perusahaan
   */
  client: string;

  /**
   * Logo perusahaan
   */
  client_logo: string | null;

  /**
   * Lokasi pekerjaan
   */
  location: string | null;

  /**
   * Tanggal pekerjaan
   */
  project_date: string | null;

  /**
   * Thumbnail project
   */
  thumbnail: string | null;

  /**
   * Foto-foto pekerjaan
   */
  gallery: ProjectGallery[];

  /**
   * Surat pengalaman kerja
   */
  experience_letter: string | null;

  /**
   * Lingkup kerja
   */
  category: ProjectCategory | null;

  featured: boolean;

  status: string;

  /**
   * SEO
   */
  meta_title: string | null;

  meta_description: string | null;

  published_at: string | null;

  created_at: string | null;

  updated_at: string | null;
}

/**
 * =========================================================
 * PAGINATION META
 * =========================================================
 */

export interface PaginationMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  per_page: number;
  to: number | null;
  total: number;
}

/**
 * =========================================================
 * PAGINATION
 * =========================================================
 */

export interface ProjectPagination {
  current_page: number;
  data: Project[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;

  links: Array<{
    url: string | null;
    label: string;
    active: boolean;
  }>;

  next_page_url: string | null;

  path: string;

  per_page: number;

  prev_page_url: string | null;

  to: number | null;

  total: number;
}

/**
 * =========================================================
 * API LINKS
 * =========================================================
 */

export interface ProjectApiLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

/**
 * =========================================================
 * API META
 * =========================================================
 *
 * Alias ke PaginationMeta agar file lama yang menggunakan
 * ProjectApiMeta tetap kompatibel.
 */

export type ProjectApiMeta = PaginationMeta;

/**
 * =========================================================
 * PROJECT LIST RESPONSE
 * =========================================================
 */

export interface ProjectResponse {
  data: Project[];

  meta?: PaginationMeta;

  links?: ProjectApiLinks;
}

/**
 * =========================================================
 * PROJECT DETAIL RESPONSE
 * =========================================================
 */

export interface ProjectDetailResponse {
  data: Project;
}

/**
 * =========================================================
 * PROJECT CATEGORY
 * =========================================================
 */

export interface ProjectCategoryItem {
  id: number;
  name: string;
  slug: string;
}

export interface ProjectCategoryResponse {
  data: ProjectCategoryItem[];
}
