import FormatedDate from "@/app/(site)/components/FormatedDate";
import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import AuthorCard from "../../AuthorCard";
interface Props {
  params: { slug: string };
}
const Article = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPost(slug);
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-screen-md p-4 ">
          <h1 className=" text-3xl font-bold">{post.title}</h1>
          <div className="py-4 ">
            <div className="join join-horizontal  py-4">
              <Image
                src={post.authorImage}
                className="rounded-full h-10 w-10  mr-2"
                width={20}
                height={20}
                alt={""}
              />
              <span className="text-md">{post.authorname}</span>
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
          <div className="">
            <Image
              className="object-cover rounded-sm w-full my-4"
              src={post.mainImage}
              alt=""
              width={600}
              height={315}
            />
          </div>
          <div className="overflow-wrap-break-word  font-sm">
            <PortableText value={post.body} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
