import { PortableTextBlock } from "sanity";
import Author from './author'
import Category from "./category";

export interface Post {
  _id: string;
  _createdAt: Date;
  title: string;
  introduction:string,
  slug: string;
  author:Author;
  mainImage: string; 
  categories:string[]
  publishedAt:Date;
  authorImage:string,
  authorname:string,
  body: PortableTextBlock[];
}
