import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    author: z.string(),
    authorRole: z.string().optional(),
    authorImage: z.string().optional(),
    date: z.date(),
    category: z.enum(['cdpr', 'advocacy', 'research', 'training', 'general']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).optional(),
  }),
});

export const collections = { blog, gallery };
