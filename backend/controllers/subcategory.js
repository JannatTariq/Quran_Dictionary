const Config = require("../config.js");
const Categories = require("../models/category");
const Subcategories = require("../models/subcategory");
const sub1a = require("../data/sub1a.json");
const sub1b = require("../data/sub1b.json");
const sub2 = require("../data/sub2.json");
const sub3 = require("../data/sub3.json");
const sub4 = require("../data/sub4.json");
const sub5 = require("../data/sub5.json");
const sub6 = require("../data/sub6.json");
const sub7 = require("../data/sub7.json");
const sub8 = require("../data/sub8.json");
const sub9 = require("../data/sub9.json");
const sub10 = require("../data/sub10.json");
const { sort } = require("../sort.js");
const mongoose = require("mongoose");

exports.populateSubcategories = (drive) => async (req, res) => {
  try {
    const categories = await Categories.find({});
    if (!categories.length) {
      return res
        .status(400)
        .json({ mesage: "No categories found! Please fetch categories first" });
    }
    async function fetchSubcategories({ categoryId, nextPageToken }) {
      console.log(
        `Fetching subcategories for ${categoryId} with page token ${nextPageToken}`,
      );
      let driveData = await drive.files.list({
        q: `'${categoryId}' in parents`,
        orderBy: `modifiedTime asc`,
        fields: Config.fields,
        pageSize: 1000,
        pageToken: nextPageToken === "initial" ? "" : nextPageToken,
      });
      return driveData;
    }
    categories.forEach(async (category) => {
      let nextPageToken = "initial";

      async function recursiveFetchSubcategories({
        categoryId,
        nextPageToken,
      }) {
        let driveData = await fetchSubcategories({ categoryId, nextPageToken });
        try {
          const subcategoriesToInsert = driveData.data.files.map((file) => ({
            ...file,
            parentId: category._id,
          }));
          await Subcategories.insertMany(subcategoriesToInsert, {
            ordered: false,
          });
          console.log(
            `Inserted ${subcategoriesToInsert.length} subcategories for ${categoryId}`,
          );
        } catch (err) {
          console.log(err);
        }
        if (driveData.data.nextPageToken) {
          nextPageToken = driveData.data.nextPageToken;
          recursiveFetchSubcategories({ categoryId, nextPageToken });
        }
      }
      recursiveFetchSubcategories({ categoryId: category.id, nextPageToken });
    });
    return res.status(200).json({ mesage: "Subcategories added successfully" });
    // return res.status(200).json({categories});
    // let driveData = await drive.files.list({
    //   q: `'${Config.parentFolderId}' in parents`,
    //   orderBy:`modifiedTime asc`,
    //   fields: Config.fields,
    // })
  } catch (err) {
    console.log(err);
    return res.status(400).json({ mesage: "Something went wrong" });
  }
};

exports.populateSubcategory8 = (drive) => async (req, res) => {
  try {
    async function fetchSubcategories({ categoryId, nextPageToken }) {
      console.log(
        `Fetching subcategories for ${categoryId} with page token ${nextPageToken}`,
      );
      let driveData = await drive.files.list({
        q: `'${categoryId}' in parents`,
        orderBy: `modifiedTime asc`,
        fields: Config.fields,
        pageSize: 1000,
        pageToken: nextPageToken === "initial" ? "" : nextPageToken,
      });
      return driveData;
    }
    let nextPageToken = "initial";

    async function recursiveFetchSubcategories({ categoryId, nextPageToken }) {
      let driveData = await fetchSubcategories({ categoryId, nextPageToken });
      try {
        const subcategoriesToInsert = driveData.data.files.map((file) => ({
          ...file,
          parentId: "6755cad51d2dbcdcb6c3a3dd",
        }));
        await Subcategories.insertMany(subcategoriesToInsert, {
          ordered: false,
        });
        console.log(
          `Inserted ${subcategoriesToInsert.length} subcategories for ${categoryId}`,
        );
      } catch (err) {
        console.log(err);
      }
      if (driveData.data.nextPageToken) {
        nextPageToken = driveData.data.nextPageToken;
        recursiveFetchSubcategories({ categoryId, nextPageToken });
      }
    }
    recursiveFetchSubcategories({
      categoryId: "13ehYaDOGhgqGlqQKBi-Ji6xieCeL62dh",
      nextPageToken,
    });
    return res.status(200).json({ mesage: "Subcategories added successfully" });
    // return res.status(200).json({categories});
    // let driveData = await drive.files.list({
    //   q: `'${Config.parentFolderId}' in parents`,
    //   orderBy:`modifiedTime asc`,
    //   fields: Config.fields,
    // })
  } catch (err) {
    console.log(err);
    return res.status(400).json({ mesage: "Something went wrong" });
  }
};

exports.getSubcategories = async (req, res) => {
  try {
    console.log("Fetching subcategories");
    const subcategories = await Subcategories.find({});
    console.log("Subcategories fetched");
    res.status(200).json(subcategories);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ mesage: "Something went wrong" });
  }
};

exports.getSubcategoriesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.query;

    console.log("Category ID:", categoryId);

    const subcategories = await Subcategories.find({
      parentId: new mongoose.Types.ObjectId(categoryId),
    });

    console.log("Subcategories found:", subcategories.length);

    return res.status(200).json(subcategories);
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.getSortedSubcategories = async (req, res) => {
  function sortByNumbers(a, b) {
    const extractNumbers = (str) => {
      return str.match(/\d+/g).map(Number); // Extract all numbers and convert to integers
    };

    const numsA = extractNumbers(a.name);
    const numsB = extractNumbers(b.name);

    // Compare numbers sequentially
    for (let i = 0; i < Math.min(numsA.length, numsB.length); i++) {
      if (numsA[i] < numsB[i]) return -1;
      if (numsA[i] > numsB[i]) return 1;
    }

    // If all compared numbers are equal, the string with fewer numbers comes first
    return numsA.length - numsB.length;
  }

  res.status(200).json(sub5.sort(sortByNumbers));
};

exports.paginateSubcategories = async (req, res) => {
  function paginateArray(array, pageSize) {
    const paginatedData = {};
    const totalPages = Math.ceil(array.length / pageSize);

    for (let i = 0; i < totalPages; i++) {
      paginatedData[i + 1] = array.slice(i * pageSize, (i + 1) * pageSize);
    }

    return paginatedData;
  }
  const subcategories = sub6;

  const paginated = paginateArray(subcategories, 100);

  res.status(200).json(paginated);
};

exports.orderSubcategoriesWithNumber = async (req, res) => {
  function updateNames(array) {
    return array.map((item, index) => {
      // Replace the first number in the name string with the iteration count + 1
      item.name = item.name.replace(/\(\d+\)/, `(${index + 1})`);
      return item;
    });
  }
  const subcategories = sub6;
  const updatedSubcategories = updateNames(subcategories);
  res.status(200).json(updatedSubcategories);
};
