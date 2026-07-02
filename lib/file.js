import File from "@/models/files";

export async function getFilesBySubcategory(subcategoryId) {
  const files = await File.find({
    parentId: subcategoryId,
  });

  files.sort((a, b) =>
    a.name.localeCompare(b.name, ["ur", "en"], {
      numeric: true,
      sensitivity: "base",
    }),
  );

  return files;
}
