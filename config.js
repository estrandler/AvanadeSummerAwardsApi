var config = {};
var localEnv = require('./localenv');

 config.DOCUMENTDB_HOST = process.env.DOCUMENTDB_HOST || localEnv.DOCUMENTDB_HOST;
 config.authKey = process.env.AUTH_KEY || localEnv.DOCUMENTDB_HOST;
 config.databaseId = "avanadesummerawards";
 config.collectionId = "Category";

module.exports = config;