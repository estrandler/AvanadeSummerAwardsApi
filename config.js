var config = {};
var localEnv = require('./localenv');

 config.host = process.env.HOST || localEnv.host;
 config.authKey = process.env.AUTH_KEY || localEnv.authKey;
 config.databaseId = "avanadesummerawards";
 config.collectionId = "Category";

module.exports = config;