// Discriminated union types for Behance-style Case Study content blocks

export type BlockType =
  | 'text_narrative'
  | 'image_full'
  | 'image_grid'
  | 'before_after'
  | 'quote_callout'
  | 'metrics_stats'
  | 'prototype_embed';

export interface BaseBlock {
  id: string;
  project_id: string;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface TextNarrativePayload {
  headline?: string;
  subheadline?: string;
  body: string;
  layout: 'single_column' | 'split_two_column';
  accentColor?: string;
}

export interface ImageFullPayload {
  imageUrl: string;
  caption?: string;
  altText: string;
  aspectRatio?: '16:9' | '21:9' | 'auto';
  fullBleed: boolean;
}

export interface ImageGridPayload {
  columns: 2 | 3 | 4;
  images: Array<{
    id: string;
    url: string;
    caption?: string;
    altText: string;
  }>;
  enableLightbox: boolean;
}

export interface BeforeAfterPayload {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  caption?: string;
}

export interface QuoteCalloutPayload {
  quote: string;
  author?: string;
  authorTitle?: string;
  avatarUrl?: string;
}

export interface MetricsStatsPayload {
  items: Array<{
    value: string;
    label: string;
    subtext?: string;
  }>;
}

export interface PrototypeEmbedPayload {
  embedUrl: string;
  title: string;
  heightPx: number;
}

export type BlockPayloadMap = {
  text_narrative: TextNarrativePayload;
  image_full: ImageFullPayload;
  image_grid: ImageGridPayload;
  before_after: BeforeAfterPayload;
  quote_callout: QuoteCalloutPayload;
  metrics_stats: MetricsStatsPayload;
  prototype_embed: PrototypeEmbedPayload;
};

export type CaseStudyBlock<T extends BlockType = BlockType> = BaseBlock & {
  block_type: T;
  content: BlockPayloadMap[T];
};
