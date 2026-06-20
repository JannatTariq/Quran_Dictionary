import Category from "@/models/category";

export async function getCategories() {
  const categories = await Category.find({});

  return categories.sort((a, b) => {
    const numA = parseInt(a.name.match(/^(\d+)/)?.[1] || 0);
    const numB = parseInt(b.name.match(/^(\d+)/)?.[1] || 0);

    return numA - numB;
  });
}
