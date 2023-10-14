import Image from "next/image";
import Link from "next/link";
import { FromNow } from "../components/FromNow";
import { Post } from "@/types/blog/post";
import { ClockIcon, PersonIcon } from "../components/icons/AppIcons";
interface Props {
  post: Post;
}
const PostCard = ({ post }: Props) => {
  return (
    <Link href={`blog/${post.slug}`}>
      <article className="rounded overflow-hidden shadow-lg flex flex-col">
        <header className="relative">
          <Image
            className="object-cover rounded-sm w-full h-auto"
            src={post.mainImage}
            alt=""
            width={200}
            height={200}
          
          />

          <div className="text-xs absolute top-0 right-0 bg-primary  px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            {post.categories[0]}
          </div>
        </header>
        <section className="px-6 py-4 mb-auto">
          <h2 className="font-medium text-lg  hover:text-primary ">
            {post.title}
          </h2>
          <p className="text-gray-500 text-sm">{post.introduction}</p>
        </section>
        <footer className="px-6 py-3 flex flex-row items-center justify-between bg-default-50">
          <span className="py-1 text-xs font-regular  mr-1 flex flex-row items-center">
            <ClockIcon />
            <span className="m-1">
              <FromNow date={post._createdAt.toString()} />
            </span>
          </span>
          <span className="py-1 text-xs font-regular  mr-1 flex flex-row items-center">
            <PersonIcon />
            <span className="ml-1">{post.authorname}</span>
          </span>
        </footer>
      </article>
    </Link>
  );
};

export default PostCard;
