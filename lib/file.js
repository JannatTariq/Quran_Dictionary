import Files from "@/models/files";

export async function getFilesBySubcategory(subcategoryId) {
  return await Files.find({ subcategoryId });
}
