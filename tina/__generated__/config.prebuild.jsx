// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: null,
  // Get this from tina.io
  token: null,
  // Get this from tina.io
  build: {
    outputFolder: "tina-admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "blog",
      // Files will be uploaded to public/blog/
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
            required: true
          },
          {
            type: "string",
            name: "author",
            label: "Author Name",
            required: true
          },
          {
            type: "string",
            name: "authorRole",
            label: "Author Role"
          },
          {
            type: "image",
            name: "authorImage",
            label: "Author Image"
          },
          {
            type: "datetime",
            name: "date",
            label: "Publication Date",
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              { value: "cdpr", label: "CDPR (Digital Policy Research)" },
              { value: "advocacy", label: "Advocacy" },
              { value: "research", label: "Research" },
              { value: "training", label: "Training" },
              { value: "general", label: "General" }
            ],
            required: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  }
});
export {
  config_default as default
};
