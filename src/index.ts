import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { UserAPI } from "./datasources/user-api";
import { resolvers } from "./resolvers/resolvers";

const typeDefs = loadSchemaSync("./**/*.{gql,graphql}", {
  loaders: [new GraphQLFileLoader()],
});

export interface Context {
  dataSources: {
    userAPI: UserAPI;
  };
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({
    dataSources: {
      userAPI: new UserAPI(),
    },
  }),
});

console.log(`🚀 Server ready at: ${url}`);
