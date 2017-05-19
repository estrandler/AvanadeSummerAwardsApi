var config = {};

 config.host = process.env.HOST || "[YOUR URI HERE]";
 config.authKey = process.env.AUTH_KEY || "[YOUR KEY HERE]";
 config.databaseId = "avanadesummerawards";
 config.collectionId = "Category";

module.exports = config;
