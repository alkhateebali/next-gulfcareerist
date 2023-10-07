import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
interface Props {
  params: { article: string };
}
const Article = async ({ params }: Props) => {
  const slug = params.article;
  const article = await getPost(slug);
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-screen-md p-4 ">
          <h1 className=" text-3xl font-bold">{article.title}</h1>
          <div className="">
            <Image
              className="object-cover rounded-sm w-full"
              src={article.featuredImage}
              alt={article.alt}
              width={600}
              height={315}
            />
          </div>
          <div className="overflow-wrap-break-word font-lora font-sm">
            <PortableText value={article.content} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
