import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers/resolvers.js";
import typeDefs from "./typedefs/typeDefs.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 5050 },
});

console.log(`🚀  Server ready at: ${url}`);

