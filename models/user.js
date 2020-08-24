import mongoose from "mongoose";
import uuid from "node-uuid";
import { postSchema } from "./post";

const userSchema = new mongoose.Schema({
  id: { type: String, default: uuid.v1 },
  name: String,
  address: String,
  birthday: String,
  posts: [postSchema],
});

const model = mongoose.model("user", userSchema);
export default model;
