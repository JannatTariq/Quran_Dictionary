import dbConnect from "@/lib/db";
import Category from "@/models/category";

export async function GET() {
  try {
    await dbConnect();

    const categories = await Category.find({});

    return Response.json({
      categories: Array.isArray(categories) ? categories : [],
    });
  } catch (err) {
    console.error("CATEGORY API ERROR:", err);

    return Response.json({ error: err.message }, { status: 500 });
  }
}
