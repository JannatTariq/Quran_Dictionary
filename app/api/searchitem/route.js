import dbConnect from "@/lib/db";
import { getSubcategoriesByCategory } from "@/lib/subcategory";

export async function POST(req) {
  try {
    await dbConnect();

    const { selectedCategory, searchQuery } = await req.json();

    const result = await getSubcategoriesByCategory(selectedCategory);

    const list = result?.subcategories || [];

    const query = searchQuery?.toLowerCase()?.trim() || "";

    const results = list.filter((item) =>
      item?.name?.toLowerCase().includes(query),
    );

    return Response.json({
      searchItems: results,
    });
  } catch (err) {
    console.error(err);

    return Response.json({ error: "Search failed" }, { status: 500 });
  }
}
