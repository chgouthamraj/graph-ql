import { GraphQLID, GraphQLString } from 'graphql';
import { userType } from '../TypeDefs/User';
import { messageType } from '../TypeDefs/Messages';
import { Users } from '../../Entities/Users';

export const CREATE_USER = {
  type: userType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({
      name,
      username,
      password,
    });
    return args;
  },
};

export const DELETE_USER = {
  type: messageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await Users.delete(id);
    return { successful: true, message: 'DELETE is Successful' };
  },
};

export const UPDATE_PASSWORD = {
  type: messageType,
  args: {
    username: { type: GraphQLString },
    oldpassword: { type: GraphQLString },
    newpassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldpassword, newpassword } = args;
    const user = await Users.findOne({ where: { username: username } });
    const userPassword = user?.password;
    if (!user) {
      throw new Error("USERNAME DOESN'T EXIst");
    }
    if (oldpassword === userPassword) {
      await Users.update({ username: username }, { password: newpassword });
      return { successful: true, message: 'PASSWORD UPDATED' };
    } else {
      throw new Error('Passwords do not watch');
    }
  },
};
