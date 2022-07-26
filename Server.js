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

let PORT = 5000 || process.env.PORT;

let uri = "mongodb://127.0.0.1:27017/Avera";

//Establishing a connection for our MongoDB Server...
connect(uri);

//Setting-up listener for a port number...
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
