import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('The Real Odds Team'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    lang: z.enum(['en', 'es', 'ko', 'ja', 'de']).default('en'),
  }),
});

export const collections = {
  articles,
};