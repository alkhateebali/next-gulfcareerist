import { PortableTextBlock } from "sanity";
import Author from './author'
import Category from "./category";

export interface Post {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  author:Author;
  mainImage: string; 
  categories:string[]
  publishedAt:Date;
  body: PortableTextBlock[];
}
