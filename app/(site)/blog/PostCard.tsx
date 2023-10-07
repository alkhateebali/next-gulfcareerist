import Image from "next/image";
import { Post } from "@/types/blog/post";
import Link from "next/link";
import FromNow from "../components/FromNow";

interface Props {
  post: Post;
}
const PostCard = ({ post }: Props) => {
  return (
    <Link href={`blog/article/${post.slug}`}>
      <div className="card w-dull bg-base-100 border-b border-gray-200  py-2   hover:bg-slate-50  transition">
        <div className="card-body">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <h2 className="card-title ">{post.title}</h2>
              <p className="hidden md:block text-gray-600  text-sm  pt-1 pb-6">{post.introduction}</p>
            </div>
            <div className="col-span-1">
              <figure>
                <Image
                  className="object-cover rounded-sm w-full "
                  src={post.featuredImage}
                  alt={post.alt}
                  width={200}
                  height={112}
                />
              </figure>
            </div>
          </div>
                        <FromNow date={post._createdAt.toString()} />

        </div>
      </div>
    </Link>
  );
};

export default PostCard;
