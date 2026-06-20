const Config = {
    parentFolderId: process.env.PARENT_FOLDER_ID || "1sZXkoekGZN0tP1YGBm1360kJ-4-rEX_Y",
    scope:['https://www.googleapis.com/auth/drive'],
    typeFolder:"application/vnd.google-apps.folder",
    fields:"nextPageToken, files(id, name, mimeType, webViewLink)",
}

export default Config;