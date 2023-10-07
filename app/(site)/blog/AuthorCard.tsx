import Image from "next/image";
import Author from "@/types/blog/author";
import imageUrlBuilder from "@sanity/image-url";
interface Props {
  name: string;
  authorImage: string;
}

const AuthorCard = ({ authorImage, name }: Props) => {
  return (
    <div className="join join-horizontal ">
      <Image
        src={authorImage}
        className="rounded-full h-5 w-5  mr-2"
        width={20}
        height={20}
        alt={""}
      />
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default AuthorCard;
