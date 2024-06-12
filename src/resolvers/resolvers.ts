import type { Context } from "../index";

export const resolvers = {
  Query: {
    users: (parent: any, args: any, context: Context) => {
      return context.dataSources.userAPI.getUsers();
    },
  },
  Mutation: {
    addUser: (
      parent: any,
      { name, email }: { name: string; email: string },
      context: Context
    ) => {
      return context.dataSources.userAPI.addUser(name, email);
    },
  },
};
