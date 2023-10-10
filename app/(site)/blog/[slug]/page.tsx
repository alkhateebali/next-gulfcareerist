import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getPost } from "@/sanity/sanity-utils";
import {
  ClockIcon,
  PersonIcon,
  TagIcon,
} from "../../components/icons/AppIcons";
import { FromNow } from "../../components/FromNow";
interface Props {
  params: { slug: string };
}
const Article = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPost(slug);
  //   console.log(post.mainImage)
  return (
    <>
      <div className="relative p-4">
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <h1 className="font-bold text-4xl">{post.title}</h1>
              <div className="py-5 text-sm font-regular  flex">
                <span className="mr-3 flex flex-row items-center">
                  <ClockIcon />
                  <span className="ml-1">
                    <FromNow date={post.publishedAt.toString()} />
                  </span>
                </span>

                <a
                  href="#"
                  className="flex flex-row items-center hover:text-indigo-600  mr-3"
                >
                  <PersonIcon />
                  <span className="ml-1">AliSher Azimi</span>
                </a>

                <a
                  href="#"
                  className="flex flex-row items-center hover:text-indigo-600"
                >
                  <TagIcon />
                  <span className="ml-1">
                    {post.categories.map((cat) => (
                      <span  className="pr-1" key={cat}>{cat}</span>
                    ))}
                  </span>
                </a>
              </div>
              <div>
                <Image
                  className="object-cover rounded-sm w-full my-4"
                  src={post.mainImage}
                  alt=""
                  width={600}
                  height={315}
                />
              </div>
              <p className="text-base leading-8 my-5">
                {/* <PortableText value={post.body} /> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
