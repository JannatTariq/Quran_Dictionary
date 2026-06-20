import dbConnect from "@/lib/db";
import { getSubcategoriesByCategory } from "@/lib/subcategory";

export async function POST(req) {
  try {
    await dbConnect();

    const { categoryId, pageNumber } = await req.json();

    const data = await getSubcategoriesByCategory(categoryId, pageNumber);

    return Response.json(data);
  } catch (err) {
    console.error(err);

    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
