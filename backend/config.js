const Config = {
    parentFolderId: process.env.PARENT_FOLDER_ID,
    scope:['https://www.googleapis.com/auth/drive'],
    typeFolder:"application/vnd.google-apps.folder",
    fields:"nextPageToken, files(id, name, mimeType, webViewLink)",
}

module.exports = Config;