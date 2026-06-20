const { type } = require("os");
const mongoose = require("mongoose");

const filesSchema = new mongoose.Schema({
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
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.models.Files || mongoose.model("Files", filesSchema);
