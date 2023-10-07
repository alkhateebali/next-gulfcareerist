import Image from "next/image"
import Author from "@/types/blog/author"

interface Props {
    author:Author
}

  
const AuthorCard = ({author}:Props) => {
  return (
    <div className="join join-horizontal ">
        <Image src={author.authorImage} className="rounded-md py-2" width={25} height={25} alt={author.name}/>
        <span>{author.name}</span>
    </div>
  )
}

export default AuthorCard