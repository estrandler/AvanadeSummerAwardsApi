var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require("./config");
var url = require('url');
var DocumentDBClient = require('documentdb').DocumentClient;
var docdbUtils = require('./docdbUtils');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    next();
})

var port = process.env.port || 8080;

var router = express.Router();


router.get('/category', function (req, res) {
    var client = docdbUtils.getClient(config.host, config.authKey);
    var querystring = {
        query: 'SELECT * FROM root'
    }

    docdbUtils.getOrCreateDatabase(client, config.databaseId, function (error, response) {
        docdbUtils.getOrCreateCollection(client, response._self, config.collectionId, function (err, coll) {
            client.queryDocuments(coll._self, querystring).toArray(function (errorResp, resourceResp, responseHead) {
                res.json({ message: resourceResp[0].Categories });
            })
        })
    })
});

app.use('/api', router);

app.listen(port);


function exit(message) {
    console.log(message);
    console.log('Press any key to exit');
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0));
}

