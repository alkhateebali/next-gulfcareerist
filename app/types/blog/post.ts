import { PortableTextBlock } from "sanity";

export interface Post {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  featuredImage: string;
  alt:string,
  url: string;
  content: PortableTextBlock[];
}
