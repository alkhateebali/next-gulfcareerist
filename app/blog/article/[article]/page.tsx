import { getPost } from "@/app/sanity/sanity-utils";
import Container from "../../Container";
interface Props {
  params: { article: string };
}
const Article = async ({ params }:Props) => {
  const slug = params.article;
  const article = await getPost(slug);
  return (
    <Container>
      <div></div>
    </Container>
  );
};

export default Article;
