import dbConnect from "@/lib/db";
import { getFilesBySubcategory } from "@/lib/file";

export async function POST(req) {
  try {
    await dbConnect();

    const { subcategoryId } = await req.json();

    if (!subcategoryId) {
      return Response.json(
        { message: "subcategoryId missing" },
        { status: 400 },
      );
    }

    const files = await getFilesBySubcategory(subcategoryId);

    return Response.json({ files });
  } catch (err) {
    console.error(err);

    return Response.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 },
    );
  }
}
