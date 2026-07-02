import dbConnect from "@/lib/db";
import Category from "@/models/category";
import Subcategory from "@/models/subcategory";
import File from "@/models/files";

export async function GET() {
  try {
    await dbConnect();

    const categories = await Category.find({});

    const result = await Promise.all(
      categories.map(async (cat) => {
        const subcategories = await Subcategory.find({ parentId: cat._id });

        const subIds = subcategories.map((s) => s._id);

        const fileCount = await File.countDocuments({
          parentId: { $in: subIds },
        });

        return {
          categoryId: cat._id,
          totalItems: subcategories.length + fileCount,
        };
      }),
    );

    return Response.json({ stats: result });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
