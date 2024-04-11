import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Query {
        greeting: String,
        name: String,
        date: String,
        description: String,
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello world!',
        name: () => 'Mohit Gujjar',
        date: () => "1990",
        description: () => "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer"
    }
}

const server = new ApolloServer({typeDefs, resolvers})
const info = await startStandaloneServer(server, {listen: {
    port:9000
}});

console.log("Server started", info)

// Run this code in terminal using command
// node src/server.js