import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } from 'graphql';

export const messageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
