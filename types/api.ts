/**
 * Generic API Response
 */
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * API Pagination Meta
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
 * Pagination Link
 */
export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

/**
 * Paginated API Response
 */
export interface PaginatedResponse<T> {
  success: boolean;
  message: string;
  data: T[];

  meta: PaginationMeta;

  links: PaginationLink[];
}

/**
 * Validation Error
 */
export interface ValidationError {
  message: string;

  errors: Record<string, string[]>;
}
