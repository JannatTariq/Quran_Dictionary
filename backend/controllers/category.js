
const Config = require('../config.js');
const Categories = require('../models/category');
const { sort } = require('../sort.js');

exports.populateCategories = (drive) => async (req, res) => {
    try{
        let driveData = await drive.files.list({
          q: `'${Config.parentFolderId}' in parents`,
          orderBy:`modifiedTime asc`,
          fields: Config.fields,
        })
        try{
            const removed = await Categories.deleteMany({});
            const inserted = await Categories.insertMany(driveData.data.files, { ordered: false });
            res.status(200).send("Categories added successfully");
        }catch(err){
            console.log(err);
            res.status(400).send("Error inserting")
        }
      }
      catch(err){
        console.log(err)
        return res.status(400).json({mesage:"Something went wrong"})
      }
}

exports.getCategories = async (req, res) => {
    try{
        const categories = await Categories.find({});
        const sorted = sort(categories);
        res.status(200).json(sorted);
    }catch(err){
        console.log(err);
        return res.status(400).json({mesage:"Something went wrong"})
    }
}


exports.sortCategories = async (req, res) => {
    try{
        const categories = await Categories.find({});
        const sorted = sort(categories);
        const remove = await Categories.deleteMany({});
        const insert = await Categories.insertMany(sorted, { ordered: false });
        res.status(200).json(insert);
    }catch(err){
        console.log(err);
        return res.status(400).json({mesage:"Something went wrong"})
    }
}