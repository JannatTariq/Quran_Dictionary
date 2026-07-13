import dbConnect from "@/lib/db";
import Category from "@/models/category";
import Subcategory from "@/models/subcategory";

export async function getManualCounts() {
  await dbConnect();

  const categoryNames = {
    mauzuaatAK: "1 (i) Quran-e-Kareem ke Mauzuaat -A to K",
    mauzuaatLZ: "1 (ii) Quran-e-Kareem ke Mauzuaat -L to Z",
    mauzuaatThird: "1 (iii) Quran-e-Kareem ke Mauzuaat",
    vocabulary: "2 Vocabulary: Aayaat aur Alfaaz (Roman Arabi)",
    haqaiq: "3 Dictionary: Alfaaz,Aayaat aur Haqaaeq",
    rabb: "4 Aayaat Rabb-e-Kareem Baare",
    nabi: "5 Aayaat Nabi SAAWAW baare",
    anbiya: "6 Aayaat Anbiya AS baare",
    haroof: "7 Quran Haroof-e-Tahajji Se",
    abc: "8 Quran a,b,c, Terteeb se (Roman Arabi)",
    quran: "9 Quran-e-Hakeem (Roman Arabi)",
    khulasa: "10 Mushaabeh/Repeat Aayaat (Roman Arabi)",
  };

  const counts = {};

  for (const [key, name] of Object.entries(categoryNames)) {
    const category = await Category.findOne({ name });

    counts[key] = category
      ? await Subcategory.countDocuments({ parentId: category._id })
      : 0;
  }

  return counts;
}
