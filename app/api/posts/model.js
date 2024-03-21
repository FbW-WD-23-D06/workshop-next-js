import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    minLength: [2, "Title must contain at least 2 characters"],
    maxLength: [50, "Title must be lesser than 50 characters"],
  },
  text: {
    type: String,
    required: [true, "Text is required"],
    trim: true,
    minLength: [1, "Text must contain at least 1 character"],
    maxLength: [1000, "Text must be lesser than 1000 characters"],
  },
});

const Post = model("post", postSchema);
export default Post;
