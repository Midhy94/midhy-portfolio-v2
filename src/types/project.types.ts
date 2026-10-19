import type { CaseStudyBlock } from './blocks.types';

export type ProjectStatus = 'draft' | 'published' | 'archived';

export interface Category {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
  created_at?: string;
}

export interface Project {
  id: string;
  category_id?: string;
  category?: Category;
  title: string;
  slug: string;
  subtitle?: string;
  summary: string;
  thumbnail_url: string;
  cover_image_url?: string;
  client_name?: string;
  role?: string;
  timeline?: string;
  deliverables?: string[];
  status: ProjectStatus;
  is_featured: boolean;
  sort_order: number;
  views_count: number;
  seo_title?: string;
  seo_description?: string;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
  blocks?: CaseStudyBlock[];
}

export interface Profile {
  id: string;
  full_name: string;
  headline: string;
  bio: string;
  avatar_url?: string;
  resume_url?: string;
  social_links: {
    linkedin?: string;
    behance?: string;
    dribbble?: string;
    github?: string;
    email?: string;
  };
  experience: Array<{
    role: string;
    company: string;
    period: string;
    location?: string;
    highlights?: string[];
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
}
