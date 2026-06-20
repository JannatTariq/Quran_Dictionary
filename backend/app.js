const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const express = require("express");
const app = express();
const { google } = require("googleapis");
const mongoose = require("mongoose");

const apikeys = require("./apikeys.json");
const Config = require("./config.js");

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

async function authorize() {
  const jwtClient = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    Config.scope,
  );
  await jwtClient.authorize();
  return jwtClient;
}

async function initializeServer() {
  const authClient = await authorize();
  const drive = google.drive({ version: "v3", auth: authClient });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  const {
    populateCategories,
    sortCategories,
    getCategories,
  } = require("./controllers/category");
  const {
    populateSubcategories,
    getSortedSubcategories,
    getSubcategories,
    getSubcategoriesByCategory,
    populateSubcategory8,
    paginateSubcategories,
    orderSubcategoriesWithNumber,
  } = require("./controllers/subcategory");
  const {
    populateFiles,
    getFiles,
    replaceFilesByCategory,
    getFilesBySubcategory,
    populateFilesByCategory,
    organizeFilesWithSubcategory,
    searchSubcategory,
  } = require("./controllers/files");

  app.get("/api/populateCategories", populateCategories(drive));
  app.get("/api/sortCategories", sortCategories);

  app.get("/api/getSubcategories", getSubcategories);
  app.get("/api/orderSubcategoriesWithNumber", orderSubcategoriesWithNumber);
  app.get("/api/getSortedSubcategories", getSortedSubcategories);
  app.get("/api/getCategories", getCategories);
  app.get("/api/getSubcategoriesByCategory", getSubcategoriesByCategory);
  app.get("/api/paginateSubcategories", paginateSubcategories);
  app.get("/api/populateSubcategories", populateSubcategories(drive));
  app.get("/api/populateSubcategory8", populateSubcategory8(drive));

  app.get("/api/populateFiles", populateFiles(drive));
  app.get("/api/getFiles", getFiles);
  app.get("/api/getFilesBySubcategory", getFilesBySubcategory);
  app.get("/api/replaceFilesByCategory", replaceFilesByCategory);
  app.get("/api/organizeFilesWithSubcategory", organizeFilesWithSubcategory);
  app.get("/api/populateFilesByCategory", populateFilesByCategory(drive));
  app.get("/api/searchSubcategory", searchSubcategory);

  return app;
}

const appReady = initializeServer();

module.exports = appReady;
