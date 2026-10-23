# SPHERE — Astro Site

Static website for SPHERE (Sphere Research and Advocacy), built with [Astro](https://astro.build) and deployed to GitHub Pages at <https://sphereresearch.org>.

## Scripts

- `npm run dev` — Start the dev server (http://localhost:4321)
- `npm run build` — Build for production into `dist/`
- `npm run preview` — Preview the production build
- `npm run check` — Type-check the project and validate content front matter (also runs in CI)
- `npm run format` — Format with Prettier

## Structure

- `src/pages/` — Routes: home, about, CDPR, contact, `blog/`
- `src/layouts/BaseLayout.astro` — HTML shell, SEO/Open Graph tags, header and footer
- `src/components/` — `PostCard` (post card) and `PostPage` (post page)
- `src/content/blog/` — Markdown posts (articles and updates); the schema is in `src/content/config.ts`
- `src/lib/content.ts` — Categories, sorting and date formatting shared by the content pages
- `src/scripts/` — Client-side scripts shared between pages
- `src/styles/global.css` — Global theme and utilities
- `public/` — Static assets (images, reports, `robots.txt`, `CNAME`)

## Publishing content

See [PUBLISHING_GUIDE.md](PUBLISHING_GUIDE.md). A post with invalid front matter fails the build, so the site is not updated.

## Notes

- `astro.config.mjs` sets `site` to `https://sphereresearch.org` and enables `@astrojs/sitemap`.
- Requires Node 18.20.8 or later (CI uses Node 20).
