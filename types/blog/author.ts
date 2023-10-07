import { PortableTextBlock } from "sanity";
export  default interface Author{
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    authorImage:string;
    bio:PortableTextBlock;
}