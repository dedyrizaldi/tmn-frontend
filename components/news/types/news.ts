export type NewsCategory =
  | "Company"
  | "Project"
  | "Equipment"
  | "Technology"
  | "CSR";

export interface NewsAuthor {
  id: number;
  name: string;
  avatar?: string;
  position?: string;
}

export interface NewsGallery {
  id: number;
  image: string;
}

export interface News {
  id: number;

  slug: string;

  title: string;

  excerpt: string;

  content: string;

  thumbnail: string;

  banner?: string;

  category: NewsCategory;

  tags: string[];

  author: NewsAuthor;

  publishedAt: string;

  readingTime: number;

  featured: boolean;

  views: number;

  gallery?: NewsGallery[];

  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}
