import File from "@/models/files";

export async function getFilesBySubcategory(subcategoryId) {
  return await File.find({
    parentId: subcategoryId, // now ObjectId matches
  });
}
