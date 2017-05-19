require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require("./config");
var url = require('url');
var CategoryService = require('./Services/CategoryService');
var NominationService = require('./Services/NominationService');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    next();
});

/**
 * Erskens Disclaimer
 * - Servicarna borde använda Promises
 */

var port = process.env.port || 8080;
var router = express.Router();
app.use(router);

router.get('/nomination/:employeeName?', function(req, res) {
    if(req.params.employeeName){
        NominationService.getNominationsForEmployee(req.params.employeeName, function(data) {
            res.json(data);
        })
    } else {
        NominationService.getAllNominations(function(data) {
            res.json(data);
        })
    }
});

router.post('/nomination/create', function(req, res) {
    //Verify model
})

router.get('/category', function (req, res) {
    CategoryService.getCategories(function(data) {
        res.json(data);
    })
});




app.listen(port);