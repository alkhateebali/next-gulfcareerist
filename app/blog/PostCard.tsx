import Image from "next/image";
import { Post } from "../types/blog/post";
import Link from "next/link";

interface Props {
  post: Post;
}
const PostCard = ({ post }: Props) => {
  return (
    <Link href="#">
    <div className="card w-dull bg-base-100 border-b border-gray-200  py-10 mx-5 my-10  cursor-pointer">
      <div className="card-body">
      <div className="grid grid-cols-4 ">
        <div className="col-span-3">
          <h2 className="card-title">{post.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <div className="col-span-1">
          <figure>
            <Image
              className="object-cover rounded-sm "
              src={post.featuredImage}
              alt={post.alt}
              width={600}
              height={400}
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
