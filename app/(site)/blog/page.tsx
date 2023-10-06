import { getPosts } from "@/sanity/sanity-utils";
import PostCard from "./PostCard";
import Breadcrumbs from "./Breadcrumbs";
import Container from "./Container";

const Blog = async () => {
  const posts = await getPosts();
  return (
    <>
      <Breadcrumbs currentRoute="Blog" />
      <Container>
        {posts.length > 0 &&
          posts.map((post) => <PostCard key={post._id} post={post} />)}
      </Container>
    </>
  );
};

export default Blog;
