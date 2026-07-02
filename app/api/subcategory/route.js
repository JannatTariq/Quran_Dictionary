import dbConnect from "@/lib/db";
import Subcategory from "@/models/subcategory";

export async function POST(req) {
  try {
    await dbConnect();

    const { categoryId, pageNumber = 1 } = await req.json();

    const pageSize = 100;
    const page = Number(pageNumber);

    // ✅ FIX: correct variable name
    const total = await Subcategory.countDocuments({
      parentId: categoryId,
    });

    const subcategories = await Subcategory.find({
      parentId: categoryId,
    })
      .collation({
        locale: "en", // or "ur"
        strength: 1,
        numericOrdering: true,
      })
      .sort({ name: 1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    return Response.json({
      subcategories,
      hasMore: page * pageSize < total,
    });
  } catch (err) {
    console.error("API ERROR:", err);

    return Response.json(
      { message: "Error", error: err.message },
      { status: 500 },
    );
  }
}
