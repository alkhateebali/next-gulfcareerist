import { getPosts } from "@/app/sanity/sanity-utils";
import PostCard from "./PostCard";
import Breadcrumbs from "../components/Breadcrumbs";

const Blog = async () => {
  const posts = await getPosts();
  return (
    <>
      <div className="conatainer py-4 lg:px-14">
        <Breadcrumbs currentRoute="Blog" />
        <div className="grid grid-cols-4 ">
          <div className="col-span-3">
            {posts.length > 0 &&
              posts.map((post) => <PostCard key={post._id} post={post} />)}
          </div>
          <div className="col-span-1">Aside</div>
        </div>
      </div>
    </>
  );
};

export default Blog;
