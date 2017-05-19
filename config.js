var config = {};
var localEnv = require('./localenv');

 config.documentdb_host = process.env.documentdb_host || localEnv.documentdb_host;
 config.authKey = process.env.AUTH_KEY || localEnv.authKey;
 config.databaseId = "avanadesummerawards";
 config.collectionId = "Category";

module.exports = config;