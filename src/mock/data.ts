import { nanoid } from "nanoid";

export const books = [
  {
    id: "1",
    title: "Test1",
    author_id: "1",
  },
  {
    id: "2",
    title: "Test2",
    author_id: "2",
  },
];
export const authors = [
  {
    id: "1",
    name: "Halit",
    surname: "Uşaklıgil",
    age: 23,
    books,
  },
  {
    id: "2",
    name: "Paul",
    surname: "Auster",
    age: 44,
    books,
  },
];

export const booksObj = [
  {
    id: nanoid(),
    title: "The Awakening",
    author: authors,
    author_id:"1",
    score: 2.5,
    isPublished: true,
},
{
    id: nanoid(),
    title: "City of Glass",
    author: authors,
    author_id:"2",
    score: 7.5,
    isPublished: false,
  },
];
