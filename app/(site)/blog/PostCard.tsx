import Image from "next/image";
import { Post } from "../types/blog/post";
import Link from "next/link";
import FromNow from "../components/FromNow";

interface Props {
  post: Post;
}
const PostCard = ({ post }: Props) => {
  return (
    <Link href={`blog/article/${post.slug}`}>
      <div className="card w-dull bg-base-100 border-b border-gray-200  py-2 my-2 mx-2  hover:bg-slate-50  transition">
        <div className="card-body">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <h2 className="card-title text-xl font-bold">{post.title}</h2>
              <p className=" text-gray-600  pt-1 pb-6">{post.introduction}</p>
              <FromNow date={post._createdAt.toString()} />
            </div>
            <div className="col-span-1">
              <figure>
                <Image
                  className="object-cover rounded-sm "
                  src={post.featuredImage}
                  alt={"#"}
                  width={112}
                  height={112}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
