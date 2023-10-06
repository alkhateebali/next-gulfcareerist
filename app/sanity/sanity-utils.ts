import { createClient, groq } from "next-sanity";
import { Post } from "../types/blog/post";
const client = createClient({
  projectId: "gnatc3vs",
  dataset: "production",
  apiVersion: "2023-10-05",
  useCdn: true,
});
export const getPosts = async (): Promise<Post[]> => {
  return client.fetch(
    groq`*[_type == "post"]{
        _id,
        _createdAt,
        title,
        introduction,
        "slug": slug.current,
        "feateredImage": featuredImage.asset->url,
        alt,
        content
      }`
  );
};
export const getPost = async (slug: string): Promise<Post> => {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        introduction,
        "slug": slug.current,
        "feateredImage": featuredImage.asset->url,
        alt,
        content
      }`,
    { slug }
  );
};
