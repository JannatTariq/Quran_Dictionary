import dbConnect from "@/lib/db";
import Category from "@/models/category";
import mongoose from "mongoose";

function parseCategoryName(name = "") {
  const numMatch = name.match(/^(\d+)/);
  const num = numMatch ? parseInt(numMatch[1]) : 9999;

  const subMatch = name.match(/\(([^)]+)\)/);
  let subRaw = subMatch?.[1]?.toLowerCase()?.replace(/\s+/g, "") || "";

  const romanMap = {
    i: 1,
    ii: 2,
    iii: 3,
    iv: 4,
    v: 5,
  };

  return {
    num,
    sub: romanMap[subRaw] ?? 0,
  };
}

export async function GET() {
  try {
    await dbConnect();

    let categories = await Category.find({});

    // ✅ SORT HERE (IMPORTANT)
    categories = categories.sort((a, b) => {
      const A = parseCategoryName(a.name);
      const B = parseCategoryName(b.name);

      if (A.num !== B.num) return A.num - B.num;
      return A.sub - B.sub;
    });

    return Response.json({
      categories,
    });
  } catch (err) {
    console.error("CATEGORY API ERROR:", err);

    return Response.json({ error: err.message }, { status: 500 });
  }
}

// export async function GET() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);

//     console.log("Connected:", mongoose.connection.readyState);
//     console.log("DB:", mongoose.connection.name);

//     console.log("Model:", Category);
//     console.log("Model Name:", Category.modelName);

//     const count = await Category.countDocuments();

//     console.log("Count:", count);

//     const categories = await Category.find({}).limit(5);

//     console.log("First 5:", categories);

//     return Response.json({
//       count,
//       categories,
//     });
//   } catch (err) {
//     console.error("CATEGORY API ERROR:", err);

//     return Response.json(
//       {
//         error: err.message,
//         stack: err.stack,
//       },
//       { status: 500 },
//     );
//   }
// }
