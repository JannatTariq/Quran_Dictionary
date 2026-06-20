import mongoose from "mongoose";
import dbConnect from "@/lib/db";
import { getFilesBySubcategory } from "@/lib/file";

export async function POST(req) {
  try {
    await dbConnect();

    const { subcategoryId } = await req.json();

    console.log("Subcategory ID:", subcategoryId);

    const files = await getFilesBySubcategory(
      new mongoose.Types.ObjectId(subcategoryId),
    );

    return Response.json({ files });
  } catch (err) {
    console.error(err);

    return Response.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 },
    );
  }
}
