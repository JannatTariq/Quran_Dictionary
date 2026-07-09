import Comment from "@/models/comment";

export async function addComment(data) {
  return await Comment.create(data);
}

export async function getComments(page = 1, limit = 10) {
  return await Comment.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
}

export async function getCommentsCount() {
  return await Comment.countDocuments();
}
