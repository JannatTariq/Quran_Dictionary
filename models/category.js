const { type } = require("os");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  webViewLink: {
    type: String,
    required: true,
    unique: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Categories || mongoose.model("Categories", categorySchema);
