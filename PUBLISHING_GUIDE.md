# SPHERE Content Publishing Guide

This guide explains how to create, format, and publish **Blog posts** (articles, event summaries and updates) on the SPHERE website. They all live in one section, `/blog`. 

---

## 📝 1. Writing Content

Posts are Markdown files with a block of metadata ("front matter") at the top. Copy an existing file from `src/content/blog/` and edit it, or start from this template:

```markdown
---
title: "Your title"
description: "One or two sentences summarising the post."
author: "Author Name"
authorRole: "Role (optional)"
authorImage: "/team/photo.jpg"   # optional
category: "advocacy"             # cdpr | advocacy | research | training | general | careers
date: 2026-01-31
coverImage: "/images/my-post-cover.jpg"   # optional
tags:
  - Digital Rights
  - Sri Lanka
lang: "en"                       # en (default) | si (Sinhala) | ta (Tamil)
draft: false                     # true hides the post from public lists
---

Write the post here in Markdown.
```

Required fields: `title`, `description`, `author`, `category` and `date`. If any is missing, the build fails and the site is not updated. Name the file after the title in lowercase with hyphens (e.g. `my-new-article.md`).

---

## 🚀 2. Publishing Content (Making it Live)

Astro uses static files to manage content. To make your file live on the site, you need to add the files to the codebase and push to GitHub.

### Step A: Place the Markdown File
Move your `.md` file into the correct folder:
`src/content/blog/`

### Step B: Place the Cover Image
1. Upload your cover image file to the corresponding folder inside the `public/` directory:
   * Put cover images in `public/images/`
2. Ensure the filename matches what you entered in the **Cover Image URL** field (e.g., `/images/my-post-cover.jpg`).

### Step C: Deploy (Push to GitHub)
Use Git to add, commit, and push the files, or upload them directly via GitHub:

#### Option 1: Using the Terminal (Command Line)
Run these commands from your project root:
```bash
# Add files to git
git add src/content/ public/

# Commit with a description
git commit -m "Publish new post: [Post Title]"

# Push to deploy
git push origin main
```

#### Option 2: Uploading via GitHub Website
1. Go to the SPHERE organization repository on GitHub.
2. Navigate to `src/content/blog/`.
3. Click **Add file** -> **Upload files**, drag your `.md` file, and commit.
4. Navigate to `public/images/`, upload your cover image, and commit.

Once pushed, GitHub Actions will build the site and deploy it to GitHub Pages automatically in 1–2 minutes. You can watch the run under the repository's **Actions** tab; if a post's frontmatter is missing a required field, the build fails there and the site is not updated.

---

## ✍️ 3. Markdown Formatting Cheatsheet

Here's a quick guide to common markdown styles you can use in the editor:

```markdown
# Heading 1 (Use only for main title - usually done automatically)
## Heading 2 (Main section headers)
### Heading 3 (Sub-sections)

This is a regular paragraph with **bold text** and *italic text*.

### Lists
- Bullet point item 1
- Bullet point item 2

1. Numbered item 1
2. Numbered item 2

### Quotes & Highlights
> This is a blockquote for highlighting important quotes or callouts.

### Links & Images
[Clickable Link Text](https://sphereresearch.org)
![Image Description](/images/my-post-cover.jpg)
```
