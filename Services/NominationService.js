var DocumentDBClient = require('documentdb').DocumentClient;
var docdbUtils = require('../docdbUtils');
var config = require("../config");

var NominationService = {
    getNominationsForEmployee: function(employeeName, callback) {
        callback( {
            'message': 'ersken är bäst'
        })
    },

    getAllNominations: function(callback) {
        callback(  {
            'message': 'alla'
        })
    }
};

module.exports = NominationService;