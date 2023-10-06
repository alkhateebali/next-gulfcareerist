import { createClient, groq } from "next-sanity";
import { Post } from "../types/blog/post";
import clientConfig from "./config/client-config";

export const getPosts = async (): Promise<Post[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
        _id,
        _createdAt,
        title,
        introduction,
        "slug": slug.current,
        "feateredImage": featuredImage.asset->url,
      }`
  );
};
export const getPost = async (slug: string): Promise<Post> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "feateredImage": feateredImage.asset->url,
        content
      }`,
    { slug }
  );
};
