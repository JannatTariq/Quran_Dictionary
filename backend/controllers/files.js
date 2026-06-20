const Config = require("../config.js");
const Files = require("../models/files");
const Subcategories = require("../models/subcategory");
const subcategories = require("../data/subcategories.json");
const files = require("../data/files.json");
const subcategoryFiles = require("../data/subcategory-files.json");
const sub6 = require("../data/sub6.json");
const sub8 = require("../data/sub8.json");
const { sort } = require("../sort.js");
const mongoose = require("mongoose");

exports.populateFiles = (drive) => async (req, res) => {
  try {
    const subcategories = await Subcategories.find({});
    console.log("Subcategories fetched:", subcategories.length);

    // Get all parentIds that already have files
    const processedParentIds = new Set(
      (await Files.distinct("parentId")).map((id) => id.toString()),
    );

    console.log(`Already processed subcategories: ${processedParentIds.size}`);

    let count = 1;

    for (const subcategory of subcategories) {
      console.log(`\n===== ${count} =====`);

      try {
        // Skip if this subcategory already has files
        if (processedParentIds.has(subcategory._id.toString())) {
          console.log(`Skipping ${subcategory.name}`);
          count++;
          continue;
        }

        console.log(`Fetching files for ${subcategory.name}`);

        const response = await drive.files.list({
          q: `'${subcategory.id}' in parents`,
          fields: "files(id, name, mimeType, webViewLink)",
          spaces: "drive",
          pageSize: 1000,
        });

        const driveFiles = response.data.files || [];

        console.log(`Fetched ${driveFiles.length} files`);

        if (!driveFiles.length) {
          count++;
          continue;
        }

        const bulkOps = driveFiles.map((file) => ({
          updateOne: {
            filter: { id: file.id },
            update: {
              $set: {
                ...file,
                parentId: subcategory._id,
              },
            },
            upsert: true,
          },
        }));

        await Files.bulkWrite(bulkOps, { ordered: false });

        // Mark this subcategory as processed
        processedParentIds.add(subcategory._id.toString());

        console.log(`Processed ${driveFiles.length} files`);
      } catch (err) {
        console.log(`Error in subcategory: ${subcategory.name}`);
        console.log(err.message);
      }

      count++;
    }

    return res.status(200).json({
      success: true,
      message: "Files population completed safely",
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.populateFilesByCategory = (drive) => async (req, res) => {
  try {
    // console.log("Fetching subcategories");
    // let subcategories = await Subcategories.find({});
    // console.log("subcategories fetched");
    let count = 1;
    for (const subcategory of sub8) {
      console.log(`=======================================================`);
      console.log(`====================== ${count} =======================`);
      console.log(`=======================================================`);
      if (subcategory.kind !== "drive#file") {
        console.log(`Fetching files for ${subcategory.name}`);
        const files = await drive.files.list({
          q: `'${subcategory.id}' in parents`,
          fields: Config.fields,
        });
        console.log(
          `Fetched ${files.data.files.length} files for ${subcategory.name}`,
        );
        const filesToInsert = files.data.files.map((file) => ({
          ...file,
          parentId: subcategory._id,
        }));
        await Files.insertMany(filesToInsert, { ordered: false });
        console.log(
          `Inserted ${files.data.files.length} files to ${subcategory.name}`,
        );
      }
      count++;
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ mesage: "Something went wrong" });
  }
};

exports.getFiles = async (req, res) => {
  try {
    console.log("Fetching files");
    const files = await Files.find({});
    console.log("Files fetched successfully!");
    res.status(200).json(files);
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: "Internal server error!" });
  }
};

exports.replaceFilesByCategory = async (req, res) => {
  const { categoryId } = req.query;
  console.log(categoryId);
};

exports.getFilesBySubcategory = async (req, res) => {
  try {
    const { subcategoryId } = req.query;

    console.log("Subcategory ID:", subcategoryId);

    const files = await Files.find({
      parentId: new mongoose.Types.ObjectId(subcategoryId),
    });

    console.log("Files found:", files.length);

    return res.status(200).json(files);
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.organizeFilesWithSubcategory = async (req, res) => {
  try {
    const organized = {};
    let count = 1;
    for (const sub of subcategories) {
      const foundFile = files.filter((file) => file.parentId === sub._id);
      console.log(`${count}) Found file for ${sub.name}`, foundFile);
      if (foundFile) {
        organized[sub._id] = foundFile;
      }
      count++;
    }
    res.status(200).json(organized);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message:
        "Aik rapta gaan py pra na, poori sarak pr hagta phiray ga. Id shi bhej madarchod",
    });
  }
};

exports.searchSubcategory = async (req, res) => {
  try {
    const { id } = req.query;

    const subcategory = await Subcategories.findById(id);

    if (!subcategory) {
      return res.status(404).json({
        success: false,
        message: "Subcategory not found",
      });
    }

    return res.status(200).json(subcategory);
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
