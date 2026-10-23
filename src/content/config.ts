import { z, defineCollection } from "astro:content";
import { CATEGORIES } from "../lib/content";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImage: z.string().optional(),
  // Use "contain" for covers with text (posters) so they are not cropped
  coverFit: z.enum(["cover", "contain"]).default("cover"),
  // Language of the post body (BCP 47), e.g. "si" for Sinhala
  lang: z.string().default("en"),
  author: z.string(),
  authorRole: z.string().optional(),
  authorImage: z.string().optional(),
  date: z.date(),
  category: z.enum(CATEGORIES),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blog = defineCollection({ type: "content", schema: postSchema });

export const collections = { blog };
