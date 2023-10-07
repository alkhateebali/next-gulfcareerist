import { createClient, groq } from "next-sanity";
import { Post } from "../types/blog/post";
import clientConfig from "./config/client-config";
import Category from "@/types/blog/category";

export const getPosts = async (): Promise<Post[]> => {
  return createClient(clientConfig).fetch(

    groq`*[_type == "post"]{
        _id,
        _createdAt,
        publishedAt,
        title,
        "slug": slug.current,
        introduction,
        "mainImage": mainImage.asset->url,
        "authorname": author->name,
        "categories": categories[]->title,
        "authorImage": author->image.asset->url,
        body
      }`
  );
};
export const getPost = async (slug: string): Promise<Post> => {
  return createClient(clientConfig).fetch(

    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      publishedAt,
      title,
      "slug": slug.current,
      introduction,
      "mainImage": mainImage.asset->url,
      "authorname": author->name,
      "categories": categories[]->title,
      "authorImage": author->image.asset->url,
      body
      }`,
    { slug }
  );
};

export const getCategories=async(): Promise<Category[]>=>{
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"]{
      _id,
      _createdAt,
      title
    }`
  )

}
