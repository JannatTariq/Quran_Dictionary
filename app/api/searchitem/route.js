import dbConnect from "@/lib/db";
import mongoose from "mongoose";
import Subcategory from "@/models/subcategory";

export async function POST(req) {
  try {
    await dbConnect();

    const { selectedCategory, searchQuery } = await req.json();

    const results = await Subcategory.aggregate([
      {
        $search: {
          index: "default_1", // <-- use your new index
          compound: {
            should: [
              {
                autocomplete: {
                  query: searchQuery,
                  path: "name",
                  fuzzy: {
                    maxEdits: 1,
                  },
                },
              },
              {
                text: {
                  query: searchQuery,
                  path: "name",
                  fuzzy: {
                    maxEdits: 2,
                  },
                },
              },
            ],
          },
        },
      },
      {
        $match: {
          parentId: new mongoose.Types.ObjectId(selectedCategory),
        },
      },
      {
        $limit: 100,
      },
    ]);

    return Response.json({
      searchItems: results,
    });
  } catch (err) {
    console.error(err);

    return Response.json({ error: "Search failed" }, { status: 500 });
  }
}
