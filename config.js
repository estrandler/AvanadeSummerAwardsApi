var config = {};

 config.host = process.env.HOST || "https://avanadesummerawards.documents.azure.com:443/";
 config.authKey = process.env.AUTH_KEY || "GJ9ql8ywVWlJb8VwyRCZrTSevC5h1sOcZkeRBmaeVfsVRz26SgFYHt95MxA52j0kMJb5j9UZYBrMn80NXJ4wSA==";
 config.databaseId = "avanadesummerawards";
 config.collectionId = "Category";

module.exports = config;