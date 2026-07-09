import dbConnect from "@/lib/db";
import { addComment, getComments, getCommentsCount } from "@/lib/comment";

export async function POST(req) {
  try {
    await dbConnect();

    const { name, email, comment } = await req.json();

    if (!name.trim() || !email.trim() || !comment.trim()) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    const newComment = await addComment({ name, email, comment });

    return Response.json({ comment: newComment });
  } catch (err) {
    console.error(err);

    return Response.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = 10;

    const comments = await getComments(page, limit);
    const totalComments = await getCommentsCount();

    return Response.json({
      comments,
      totalComments,
      hasMore: page * limit < totalComments,
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 },
    );
  }
}
