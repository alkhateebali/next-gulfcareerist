import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
const config = defineConfig({
    projectId:'gnatc3vs',
    dataset:'production',
    title:'Gulf Careerist',
    apiVersion:'2023-10-5',
    basePath:'/admin',
    plugins:[deskTool()]
});
export default config;
