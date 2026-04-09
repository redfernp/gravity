import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  category: z.string(),
  subcategory: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  author: z.string().default('Gravity Team'),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  readTime: z.number().optional(),
});

const brandSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  heroImage: z.string().optional(),
  category: z.string(),
  pricePoint: z.enum(['dtc-value', 'mid', 'premium', 'luxury']),
  affiliateUrl: z.string().optional(),
  affiliateNetwork: z.string().optional(),
  featured: z.boolean().default(false),
  athleteRoster: z.array(z.string()).default([]),
  keyProducts: z.array(z.string()).default([]),
  origin: z.string().optional(),
  founded: z.number().optional(),
});

export const collections = {
  compete: defineCollection({ type: 'content', schema: articleSchema }),
  'gear-lab': defineCollection({ type: 'content', schema: articleSchema }),
  'brand-spotlights': defineCollection({ type: 'content', schema: brandSchema }),
  shred: defineCollection({ type: 'content', schema: articleSchema }),
  destinations: defineCollection({ type: 'content', schema: articleSchema }),
  culture: defineCollection({ type: 'content', schema: articleSchema }),
};
