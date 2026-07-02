// import Subcategories from "../components/Subcategories/Subcategories";
// import Jumbotron from "../components/Jumbotron/Jumbotron";
// import dbConnect from "@/lib/db";
// import SubcategoryModel from "@/models/subcategory";
// import File from "@/models/files";

// async function getTotal(categoryId) {
//   await dbConnect();

//   // Get all subcategories under this category
//   const subcategories = await SubcategoryModel.find(
//     { parentId: categoryId },
//     "_id"
//   );

//   const subcategoryIds = subcategories.map((sub) => sub._id);

//   // Count all files inside those subcategories
//   const totalFiles = await File.countDocuments({
//     parentId: { $in: subcategoryIds },
//   });

//   console.log("Subcategories:", subcategories.length);
//   console.log("Files:", totalFiles);

//   return totalFiles;
// }

// export default async function SubcategoryPage({ searchParams }) {
//   const total = await getTotal(searchParams.categoryId);

//   return (
//     <div>
//       <Jumbotron
//         title={searchParams.categoryName}
//         categoryId={searchParams.categoryId}
//         total={total}
//       />

//       <Subcategories categoryId={searchParams.categoryId} />
//     </div>
//   );
// }

import Subcategories from "../components/Subcategories/Subcategories";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import dbConnect from "@/lib/db";
import SubcategoryModel from "@/models/subcategory";

async function getTotal(categoryId) {
  await dbConnect();

  return SubcategoryModel.countDocuments({
    parentId: categoryId,
  });
}

export default async function SubcategoryPage({ searchParams }) {
  const total = await getTotal(searchParams.categoryId);

  return (
    <div>
      <Jumbotron
        title={searchParams.categoryName}
        categoryId={searchParams.categoryId}
        total={total || 0}
      />

      <Subcategories categoryId={searchParams.categoryId} />
    </div>
  );
}
