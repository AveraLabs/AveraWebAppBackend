import { ApolloServer } from "apollo-server";
import { typeDefs } from "./GraphQL/TypeDef.js";
import { resolvers } from "./GraphQL/Resolvers.js";
import mongo from "mongoose";

const { connect } = mongo;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

let PORT = process.env.PORT;

let uri = process.env.MONGO;

//Establishing a connection for our MongoDB Server...
//connect(uri);

//Setting-up listener for a port number...
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
