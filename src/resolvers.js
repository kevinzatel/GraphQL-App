import userModel from "../models/user.js";
import postModel from "../models/post.js";

const resolvers = {
  Query: {
    users: () => userModel.find({}),
    user: (root, { id }) => {
      return userModel.findOne({ id }, (err, user) => user.id === id);
    },
  },
  Mutation: {
    addUser: (root, { name, address, birthday, posts }) => {
      const user = new userModel({
        name,
        address,
        birthday,
        posts,
      });
      return user.save();
    },
    addPost: (root, { userId, title, content, comments }) => {
      const post = new postModel({
        title,
        content,
        comments,
      });

      userModel.findOne({ id: userId }, (err, user) => {
        user.posts.push(post);
        user.save();
      });
      return post;
    },
  },
};

export default resolvers;
