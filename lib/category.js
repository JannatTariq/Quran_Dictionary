import Category from "@/models/category";

export async function getCategories() {
  return await Category.find({});
}
