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
      <Breadcrumbs currentRoute="Blog" />

      <div className="conatainer py-4 lg:px-14">
        <div className="grid   grid-col-1  lg:grid-cols-4 gap-8 ">
          <div className="col-span-3">
            {posts.length > 0 &&
              posts.map((post) => <PostCard key={post._id} post={post} />)}
          </div>
          <div className="col-span-1">
            <Aside  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
