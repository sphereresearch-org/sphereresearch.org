export const CATEGORIES = ['cdpr', 'advocacy', 'research', 'training', 'general', 'careers'] as const;
export type Category = (typeof CATEGORIES)[number];

/** Lower number = listed first on the blog and article indexes. */
const CATEGORY_PRIORITY: Record<Category, number> = {
  cdpr: 1,
  advocacy: 2,
  research: 3,
  training: 4,
  general: 5,
  careers: 6,
};

/** Category badge colours as `[background, text, border]` rgb triples. */
export const CATEGORY_COLORS: Record<Category, string> = {
  cdpr: '2, 132, 199',
  advocacy: '16, 185, 129',
  research: '139, 92, 246',
  training: '245, 158, 11',
  general: '107, 114, 128',
  careers: '236, 72, 153',
};

interface Dated {
  data: { category: Category; date: Date };
}

/** Sort by category priority first, then newest first. */
export function sortPosts<T extends Dated>(posts: T[]): T[] {
  return [...posts].sort(
    (a, b) =>
      CATEGORY_PRIORITY[a.data.category] - CATEGORY_PRIORITY[b.data.category] ||
      b.data.date.getTime() - a.data.date.getTime(),
  );
}

/** Front-matter dates are parsed as UTC midnight, so format them in UTC. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
