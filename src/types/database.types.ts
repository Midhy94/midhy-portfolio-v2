// Supabase Database Row Types
import type { ProjectStatus } from './project.types';

export interface Database {
  public: {
    Tables: {
      admin_users: {
        Row: {
          user_id: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          created_at?: string;
        };
        Update: {
          user_id?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          full_name: string;
          headline: string;
          bio: string;
          avatar_url: string | null;
          resume_url: string | null;
          social_links: Record<string, string>;
          experience: Array<Record<string, unknown>>;
          skills: Array<Record<string, unknown>>;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          headline: string;
          bio: string;
          avatar_url?: string | null;
          resume_url?: string | null;
          social_links?: Record<string, string>;
          experience?: Array<Record<string, unknown>>;
          skills?: Array<Record<string, unknown>>;
          updated_at?: string;
        };
        Update: {
          full_name?: string;
          headline?: string;
          bio?: string;
          avatar_url?: string | null;
          resume_url?: string | null;
          social_links?: Record<string, string>;
          experience?: Array<Record<string, unknown>>;
          skills?: Array<Record<string, unknown>>;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          sort_order?: number;
        };
      };
      projects: {
        Row: {
          id: string;
          category_id: string | null;
          title: string;
          slug: string;
          subtitle: string | null;
          summary: string;
          thumbnail_url: string;
          cover_image_url: string | null;
          client_name: string | null;
          role: string | null;
          timeline: string | null;
          deliverables: string[] | null;
          status: ProjectStatus;
          is_featured: boolean;
          sort_order: number;
          views_count: number;
          seo_title: string | null;
          seo_description: string | null;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          category_id?: string | null;
          title: string;
          slug: string;
          subtitle?: string | null;
          summary: string;
          thumbnail_url: string;
          cover_image_url?: string | null;
          client_name?: string | null;
          role?: string | null;
          timeline?: string | null;
          deliverables?: string[] | null;
          status?: ProjectStatus;
          is_featured?: boolean;
          sort_order?: number;
          views_count?: number;
          seo_title?: string | null;
          seo_description?: string | null;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          category_id?: string | null;
          title?: string;
          slug?: string;
          subtitle?: string | null;
          summary?: string;
          thumbnail_url?: string;
          cover_image_url?: string | null;
          client_name?: string | null;
          role?: string | null;
          timeline?: string | null;
          deliverables?: string[] | null;
          status?: ProjectStatus;
          is_featured?: boolean;
          sort_order?: number;
          views_count?: number;
          seo_title?: string | null;
          seo_description?: string | null;
          published_at?: string | null;
          updated_at?: string;
        };
      };
      case_study_blocks: {
        Row: {
          id: string;
          project_id: string;
          block_type: string;
          sort_order: number;
          content: Record<string, unknown>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          block_type: string;
          sort_order?: number;
          content: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          block_type?: string;
          sort_order?: number;
          content?: Record<string, unknown>;
          updated_at?: string;
        };
      };
      media_assets: {
        Row: {
          id: string;
          file_name: string;
          file_path: string;
          file_size: number;
          mime_type: string;
          width: number | null;
          height: number | null;
          alt_text: string | null;
          bucket: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          file_name: string;
          file_path: string;
          file_size: number;
          mime_type: string;
          width?: number | null;
          height?: number | null;
          alt_text?: string | null;
          bucket?: string;
          created_at?: string;
        };
        Update: {
          alt_text?: string | null;
        };
      };
    };
  };
}
