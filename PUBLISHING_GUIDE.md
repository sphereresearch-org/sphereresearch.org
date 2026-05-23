# SPHERE Content Publishing Guide

This guide explains how to create, format, and publish **Articles** and **Blog Posts** on the SPHERE website. 

---

## 🔑 1. Accessing the Admin Dashboard

The website includes a dedicated admin panel to write, format, preview, and generate your article files.

* **URL**: `/admin` (e.g., `https://sphereresearch.org/admin` or `http://localhost:4321/admin` when running locally)
* **Access Password**: `sphere@admin2024`

---

## 📝 2. Writing and Generating Content

1. Navigate to the admin URL and enter the password.
2. Click the **"Create New"** button in the top right.
3. Choose the **Content Type**:
   * **Article**: Academic research, policy briefs, or formal project publications.
   * **Blog Post**: Shorter, opinion pieces, updates, or community news.
4. Fill in the metadata:
   * **Title**: The main title of your post.
   * **Description**: A short summary (1-2 sentences) of the post.
   * **Author**: Select a pre-configured team member from the grid, or open the details dropdown to input custom author details.
   * **Category**: Choose one of CDPR, Advocacy, Research, Training, or General.
   * **Date**: The publication date.
   * **Cover Image URL**: Path to your cover image (e.g., `/blog/my-post-cover.jpg`). *Note: see section 3 below on image placement.*
   * **Tags**: Add relevant tags, separated by commas.
   * **Save as Draft**: Check this if you want the post to be saved as a draft (hidden from the public list).
5. Write your **Article Content** in the editor using Markdown. Use the toolbar buttons to quickly insert headings, bold text, links, and images.
6. Click **"Preview"** to check the layout.
7. Click **"Generate & Download"** once done. This will download a `.md` file named after your title (e.g., `my-new-article.md`) to your computer.

---

## 🚀 3. Publishing Content (Making it Live)

Astro uses static files to manage content. To make your generated file live on the site, you need to add the files to the codebase and push to GitHub.

### Step A: Place the Markdown File
Move your downloaded `.md` file into the correct folder:
* **Articles**: `src/content/articles/`
* **Blog Posts**: `src/content/blog/`

### Step B: Place the Cover Image
1. Upload your cover image file to the corresponding folder inside the `public/` directory:
   * Put blog covers in `public/blog/`
   * Put article covers in `public/articles/`
2. Ensure the filename matches what you entered in the **Cover Image URL** field (e.g., `/blog/my-post-cover.jpg`).

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
2. Navigate to `src/content/articles/` (or `blog/`).
3. Click **Add file** -> **Upload files**, drag your downloaded `.md` file, and commit.
4. Navigate to `public/blog/` (or `public/articles/`), upload your cover image, and commit.

Once pushed, the hosting platform (Vercel) will build and deploy the changes automatically in 1–2 minutes.

---

## ✍️ 4. Markdown Formatting Cheatsheet

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
![Image Description](/blog/my-post-cover.jpg)
```
