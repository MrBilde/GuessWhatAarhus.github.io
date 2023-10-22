import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "_site",
  },
  media: {
    tina: {
      mediaRoot: "/static/img",
      publicFolder: "_site",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "src/pages",
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
            name: "permalink",
            label: "Permalink (must be 'index.html' for the frontpage)",
          },
          {
            type: "object",
            name: "hero",
            label: "Hero image",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "extraClasses",
                label: "Extra CSS classes",
                list: true,
              },
            ],
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
        name: "navigation",
        label: "Menu",
        path: "src/_data",
        format: "yaml",
        match: {
          include: "navigation",
        },
        fields: [
          {
            name: "items",
            label: "Menu",
            type: "object",
            list: true,
            fields: [
              {
                name: "text",
                label: "Text",
                type: "string",
                required: true,
              },
              {
                name: "url",
                label: "Link (fx '/kontakt')",
                type: "string",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
