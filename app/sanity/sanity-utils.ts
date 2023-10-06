import { createClient, groq } from "next-sanity";
import { Post } from "../types/blog/post";

export const getPosts = async (): Promise<Post[]> => {
  const client = createClient({
    projectId: "gnatc3vs",
    dataset: "production",
    apiVersion: "2023-10-05",
    useCdn: false,
  });
  return client.fetch(
    groq`*[_type == "post"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "feateredImage":feateredImage.asset->url,
        alt,
        url,
        content
      }`
  );
};
