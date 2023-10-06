import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import blogSchemas from "./app/sanity/schemas/blog";
const config = defineConfig({
  projectId: "gnatc3vs",
  dataset: "production",
  title: "Gulf Careerist",
  apiVersion: "2023-10-5",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: blogSchemas },
});
export default config;
