var config = {};

 config.DOCUMENTDB_HOST = process.env.DOCUMENTDB_HOST;
 config.authKey = process.env.AUTH_KEY;
 config.databaseId = "avanadesummerawards";
 config.collectionId = "Category";

module.exports = config;