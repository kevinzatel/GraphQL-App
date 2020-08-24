import mongoose from "mongoose";
import uuid from "node-uuid";

export const postSchema = new mongoose.Schema({
  id: { type: String, default: uuid.v1 },
  title: String,
  content: String,
  comments: [String],
});

const model = mongoose.model("post", postSchema);
export default model;
