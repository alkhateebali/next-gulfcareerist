import Image from "next/image";
import { Post } from "@/types/blog/post";
import Link from "next/link";
import FromNow from "../components/FromNow";
import AuthorCard from "./AuthorCard";
import FormatedDate from "../components/FormatedDate";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  // console.log(post);
  return (
    <Link href={`blog/article/${post.slug}`}>
      <div className="card w-dull bg-base-100 border-b border-gray-200  py-2   hover:bg-slate-50  transition">
        <div className="card-body">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <div className="join join-horizontal ">
                <Image
                  src={post.authorImage}
                  className="rounded-full h-5 w-5  mr-2"
                  width={20}
                  height={20}
                  alt={""}
                />
                <span className="text-sm">{post.authorname}</span>
              </div>
              <h2 className="card-title ">{post.title}</h2>
              <p className="hidden md:block text-gray-600  text-sm  pt-1 pb-6">
                {post.introduction}
              </p>
            </div>
            <div className="col-span-1">
              <Image
                className="object-cover rounded-sm w-full h-auto"
                src={post.mainImage}
                alt=""
                width={1200}
                height={630}
              />
            </div>
          </div>

          <ul>
            <span className="mr-8">
              <FormatedDate date={post._createdAt.toString()} />
            </span>
            <span className="mr-2">Posted in</span>
            {post.categories.map((category) => (
              <li className="badge badge-ghost  gap-2 mr-2" key={category}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
