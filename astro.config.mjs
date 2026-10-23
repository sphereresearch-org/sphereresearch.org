import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sphereresearch.org",
  output: "static",
  integrations: [sitemap()],
  // GitHub Pages has no server redirects, so Astro writes a small redirect
  // page (with a canonical link) at each old URL. The Articles section
  // was merged into /blog.
  redirects: {
    "/articles": "/blog",
    "/articles/call-for-applications-program-officer-po": "/blog/call-for-applications-program-officer-po",
    "/articles/energy-as-a-baseline-enabler-why-sri-lanka-s-digitalization-of-electricity-grievances-must-be-human-centric": "/blog/energy-as-a-baseline-enabler-why-sri-lanka-s-digitalization-of-electricity-grievances-must-be-human-centric",
    "/articles/finding-balance-living-with-your-phone": "/blog/finding-balance-living-with-your-phone",
    "/articles/freedom-of-expression-in-sri-lanka-digital-space": "/blog/freedom-of-expression-in-sri-lanka-digital-space",
    "/articles/how-social-media-rewrote-sri-lankas-election-playbook": "/blog/how-social-media-rewrote-sri-lankas-election-playbook",
    "/articles/know-your-rights-biyagama": "/blog/know-your-rights-biyagama",
    "/articles/media-meter": "/blog/media-meter",
    "/articles/navigating-digital-privacy-and-security-2026": "/blog/navigating-digital-privacy-and-security-2026",
    "/articles/navigating-promise-and-peril-of-digital-democracy": "/blog/navigating-promise-and-peril-of-digital-democracy",
    "/articles/sphere-members-files-a-petition-challenging-the-newly-proposed-protection-of-the-state-from-terrorism-bill": "/blog/sphere-members-files-a-petition-challenging-the-newly-proposed-protection-of-the-state-from-terrorism-bill",
  },
});
