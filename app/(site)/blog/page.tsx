import { getPosts } from "@/sanity/sanity-utils";
import PostCard from "./PostCard";
import Breadcrumbs from "./Breadcrumbs";
import Aside from "./Aside";
import Head from "next/head";
<Head>
  <link rel="canonical" href="https://gulfcareerist.com/blog" />
</Head>;
const Blog = async () => {
  const posts = await getPosts();
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {posts.length > 0 &&
            posts.map((post) => (
              <div key={post._id}>
                <PostCard post={post} />
              </div>
            ))}
          <aside className="lg:fixed  lg:right-9  lg:h-screen "><Aside/></aside>
        </div>
      </div>
    </>
  );
};

export default Blog;
