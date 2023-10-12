import { getPosts } from "@/sanity/sanity-utils";
import PostCard from "./PostCard";
import Breadcrumbs from "./Breadcrumbs";
import Head from "next/head";
import Container from "../components/Container";
<Head>
  <link rel="canonical" href="https://gulfcareerist.com/blog" />
</Head>;
const Blog = async () => {
  const posts = await getPosts();
  return (
    <Container>
      <div className="text-center md:px-20">
        <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter md:text-3xl lg:text-4xl lg:max-w-7xl">
          Gulf Carrerist Blog
        </h1>
        <p className="md:px-20 py-5">
          in the Gulf&apos; it&rsquo;s all about the people and the keys to success. Meet
          some of the professionals shaping careers in our region and discover
          the secrets to thriving in Gulf careers.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="flex items-center pb-2 pr-2 border-b-2 border-primary uppercase">
            <a href="#" className="font-semibold inline-block">
              BROWSE ALL POSTS
            </a>
          </div>
          <span>
            Browse by: <a href="#">Topic</a>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {posts.length > 0 &&
            posts.map((post) => (
              <div key={post._id}>
                <PostCard post={post} />
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Blog;
