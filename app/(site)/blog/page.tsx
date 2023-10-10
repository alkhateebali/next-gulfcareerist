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
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <a href="#" className="font-semibold inline-block">
              Cooking BLog
            </a>
          </div>
          <a href="#">See All</a>
        </div>

        <div className="col-span-3">
          {posts.length > 0 &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </>
  );
};

export default Blog;
