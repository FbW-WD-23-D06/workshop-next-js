import { Schema, model, models } from "mongoose";

console.log("models:", models);

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    minLength: [2, "Title must contain at least 2 characters"],
    maxLength: [50, "Title must be lesser than 50 characters"],
  },

  body: {
    type: String,
    required: [true, "Body is required"],
    trim: true,
    minLength: [1, "Body must contain at least 1 character"],
    maxLength: [1000, "Body must be lesser than 1000 characters"],
  },
},
{
  timestamps: true,
  versionKey: false,
});

const PostModel = models.Post || model("Post", postSchema);
export default PostModel;
