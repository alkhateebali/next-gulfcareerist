import { getPost } from "@/app/sanity/sanity-utils";
import Container from "../../Container";
import { PortableText } from "@portabletext/react";
interface Props {
  params: { article: string };
}
const Article = async ({ params }:Props) => {
  const slug = params.article;
  const article = await getPost(slug);
  return (
    <Container>
      <h1 className=" text-3xl font-bold">{article.title}</h1>
      <PortableText value={article.content}/>
    </Container>
  );
};

export default Article;
