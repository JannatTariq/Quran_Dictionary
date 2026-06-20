import dbConnect from "@/lib/db";
import { getCategories } from "@/lib/category";

export async function GET() {
  try {
    await dbConnect();

    const categories = await getCategories();

    return Response.json({ categories });
  } catch (err) {
    console.error(err);

    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
