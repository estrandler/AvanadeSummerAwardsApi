
var DocumentDBClient = require('documentdb').DocumentClient;
var docdbUtils = require('../docdbUtils');
var config = require("../config");

var CategoryService = {

    getCategories: function (callback) {
        var client = docdbUtils.getClient(config.DOCUMENTDB_HOST, config.AUTH_KEY);
        var querystring = {
            query: 'SELECT * FROM root'
        }

        docdbUtils.getOrCreateDatabase(client, config.databaseId, function (error, response) {
            docdbUtils.getOrCreateCollection(client, response._self, config.collectionId, function (err, coll) {
                client.queryDocuments(coll._self, querystring).toArray(function (errorResp, resourceResp, responseHead) {
                    callback({ message: resourceResp[0].Categories });
                })
            })
        })
    }
}


module.exports = CategoryService;