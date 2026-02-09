import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
    // Debugging: Log partial ID to verify it's loaded (Remove in production if concerned)
    clientId: process.env.TINA_CLIENT_ID || "",
    token: process.env.TINA_TOKEN || "",
    // debug output
    // console.log("Tina Client ID:", process.env.TINA_CLIENT_ID ? "Set" : "Not Set");
    build: {
        outputFolder: "tina-admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "blog", // Files will be uploaded to public/blog/
            publicFolder: "public",
        },
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
                        required: true,
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "Description",
                        required: true,
                        ui: {
                            component: "textarea",
                        },
                    },
                    {
                        type: "image",
                        name: "coverImage",
                        label: "Cover Image",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "author",
                        label: "Author Name",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "authorRole",
                        label: "Author Role",
                    },
                    {
                        type: "image",
                        name: "authorImage",
                        label: "Author Image",
                    },
                    {
                        type: "datetime",
                        name: "date",
                        label: "Publication Date",
                        required: true,
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
                            { value: "general", label: "General" },
                        ],
                        required: true,
                    },
                    {
                        type: "string",
                        name: "tags",
                        label: "Tags",
                        list: true,
                    },
                    {
                        type: "boolean",
                        name: "draft",
                        label: "Draft",
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
            {
                name: "gallery",
                label: "Image Gallery",
                path: "src/content/gallery",
                format: "json",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "object",
                        name: "images",
                        label: "Images",
                        list: true,
                        ui: {
                            itemProps: (item) => {
                                return { label: item?.alt || 'Image' }
                            },
                        },
                        fields: [
                            {
                                type: "image",
                                name: "src",
                                label: "Image Source",
                                required: true,
                            },
                            {
                                type: "string",
                                name: "alt",
                                label: "Alt Text",
                                required: true,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    search: {
        tina: {
            indexerToken: process.env.TINA_SEARCH_TOKEN,
            stopwordLanguages: ['eng']
        },
        indexBatchSize: 100,
        maxSearchIndexFieldLength: 100
    },
});
