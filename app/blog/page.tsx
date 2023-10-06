import { getPosts } from "@/app/sanity/sanity-utils";

const Blog = async () => {
  const posts = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <li key={post.id} >{post.title}</li>
      ))}
    </>
  );
};

export default Blog;
