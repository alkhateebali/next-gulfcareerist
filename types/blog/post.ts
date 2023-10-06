import { PortableTextBlock } from "sanity";

export interface Post {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  introduction: string;
  featuredImage: string;  //
  alt: string;
  content: PortableTextBlock[];
}
