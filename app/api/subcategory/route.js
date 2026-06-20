import dbConnect from "@/lib/db";
import Subcategory from "@/models/subcategory";

export async function POST(req) {
  try {
    await dbConnect();

    const { categoryId, pageNumber = 1 } = await req.json();

    console.log("categoryId:", categoryId);

    const allSubcategories = await Subcategory.find({
      parentId: categoryId, // ✅ IMPORTANT FIX
    });

    const pageSize = 100;
    const start = (pageNumber - 1) * pageSize;

    return Response.json({
      subcategories: allSubcategories.slice(start, start + pageSize),
      hasMore: start + pageSize < allSubcategories.length,
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      { message: "Error", error: err.message },
      { status: 500 },
    );
  }
}
