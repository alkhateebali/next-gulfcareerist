import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./app/sanity/schemas";
const config = defineConfig({
  projectId: "gnatc3vs",
  dataset: "production",
  title: "Gulf Careerist",
  apiVersion: "2023-10-05",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  
});
export default config;
