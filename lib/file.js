import File from "@/models/files";

export async function getFilesBySubcategory(subcategoryId) {
  console.log("Searching for parentId:", subcategoryId);
  const files = await File.find({
    parentId: subcategoryId,
  });
  console.log("Found files:", files.length);
  files.sort((a, b) =>
    a.name.localeCompare(b.name, ["ur", "en"], {
      numeric: true,
      sensitivity: "base",
    }),
  );

  return files;
}
