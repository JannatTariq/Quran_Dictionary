import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    comment: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Comment ||
  mongoose.model("Comment", commentSchema);
