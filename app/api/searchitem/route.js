import dbConnect from "@/lib/db";
import { getSubcategoriesByCategory } from "@/lib/subcategory";

export async function POST(req) {
  try {
    await dbConnect();

    const { selectedCategory, searchQuery } = await req.json();

    const subcategories = await getSubcategoriesByCategory(selectedCategory);

    const results = subcategories.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return Response.json({
      searchItems: results,
    });
  } catch (err) {
    console.error(err);

    return Response.json({ error: "Search failed" }, { status: 500 });
  }
}
