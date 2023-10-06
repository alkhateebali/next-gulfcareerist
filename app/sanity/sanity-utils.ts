import { createClient, groq } from "next-sanity";

export const getPosts = async () => {
  const client = createClient({
    projectId: "gnatc3vs",
    dataset: "production",
    apiVersion: "2023-10-05",
  });
  return client.fetch(
    groq`*[_type == "post"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        url,
        content
      }`
    )
  
};
