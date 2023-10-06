import Image from "next/image";
import { Post } from "../types/blog/post";
import Link from "next/link";

interface Props {
  post: Post;
}
const PostCard = ({ post }: Props) => {
  return (
    <Link href={`blog/article/${post.slug}`}>
      <div className="card w-dull bg-base-100 border-b border-gray-200  py-10  my-10  cursor-pointer hover:scale-105  hover:bg-slate-50  transition">
        <div className="card-body">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <h2 className="card-title text-xl font-bold">
                {post.featuredImage}
              </h2>
              <p>{post.introduction}</p>
            </div>
            <div className="col-span-1">
              <figure>
                {/* <Image
                  className="object-cover rounded-sm "
                  src={post.featuredImage}
                  alt={"#"}
                  width={112}
                  height={112}
                /> */}
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
