import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";
const config = defineConfig({
  projectId: "gnatc3vs",
  dataset: "production",
  title: "Gulf Careerist",
  apiVersion: "2023-10-05",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
export default config;
