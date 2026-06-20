import Subcategory from "@/models/subcategory";

export async function getSubcategoriesByCategory(categoryId, pageNumber = 1) {
  const pageSize = 100;

  const all = await Subcategory.find({ categoryId });

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    subcategories: all.slice(startIndex, endIndex),
    hasMore: endIndex < all.length,
  };
}
