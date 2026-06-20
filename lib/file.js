import File from "@/models/file";

export async function getFilesBySubcategory(subcategoryId) {
  return await File.find({ subcategoryId });
}
