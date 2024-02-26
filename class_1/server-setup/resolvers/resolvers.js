import { books } from "../db/data.js";
const resolvers = {
    Query: {
        books: () => books,
    },
};

export default resolvers;

