import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getPost } from "@/sanity/sanity-utils";
import {
  ClockIcon,
  PersonIcon,
  TagIcon,
} from "../../components/icons/AppIcons";
import { FromNow } from "../../components/FromNow";
import Container from "../../components/Container";
import type { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: { slug: string };
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const post = await getPost(slug);
  const previousImages = (await parent).openGraph?.images || [];
  const newImage = post.mainImage;
  return {
    title: post.title,
    description: post.introduction,
    alternates: {
      canonical: "https://gulfcareerist.com/blog/" + post.slug,
    },
    openGraph: {
      title: post.title,
      images: [newImage, ...previousImages],
    },
  };
}

const Article = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPost(slug);

  return (
    <Container>
      <article className="relative p-4">
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <h1 className="font-bold text-4xl">{post.title}</h1>
              <div className="py-5 text-sm font-regular  flex">
                <span className="mr-3 flex flex-row items-center hover:text-primary  ">
                  <ClockIcon />
                  <span className="ml-1">
                    <time dateTime={post.publishedAt.toString()}>
                      <FromNow date={post.publishedAt.toString()} />
                    </time>
                  </span>
                </span>
                <span className="flex flex-row items-center hover:text-primary  mr-3">
                  <PersonIcon />
                  <span className="ml-1">{post.authorname}</span>
                </span>
                <span className="flex flex-row items-center hover:text-primary ">
                  <TagIcon />
                  <span className="ml-1">
                    {post.categories.map((cat) => (
                      <span className="pr-1" key={cat}>
                        {cat}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
              <figure>
                <Image
                  className="object-cover rounded-sm w-full my-4"
                  src={post.mainImage}
                  alt=""
                  width={600}
                  height={315}
                />
                <figcaption></figcaption>
              </figure>
              <p className="text-base leading-8 my-5 dark:text-gray-500 ">
                <PortableText value={post.body} />
              </p>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Article;
