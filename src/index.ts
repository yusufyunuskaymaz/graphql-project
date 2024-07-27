import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { nanoid } from "nanoid";
import { books, booksObj, authors } from "./mock/data";

const typeDefs = `#graphql

type Author {
  id:ID!
  name:String
  surname:String
  age:Int
  books: [Book!]
}

type Book {
  id: ID!
  author: Author
  author_id:String
  title: String
  score: Float
  isPublished: Boolean
}


    type Query {
     books: [Book!]
     book(id:ID!): Book
     isim: String
     authors: [Author!]
     author(name:String!):[Author]
    }
`;

const resolvers = {
  Query: {
    books: () => booksObj,
    book: (parent, arg) => {
      console.log(arg, "arr");
      const data = books.find((el) => el.id === arg.id);
      return data;
    },
    isim: () => "Yusuf",
    authors: () => authors,
    author: (parent, args) => {
      const data = authors.filter((el) => el.name.includes(args.name.trim()));
      return data;
    },
  },
  Book: {
    author:(parent,args) => {
      const data = authors.find(el=>el.id === parent.author_id)
      return data
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
