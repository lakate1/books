"use strict";
Object.defineProperty(exports, "_esModule", { value: true});
var connectionString = "mongodb://leah:leah123@ds139950.mlab.com:39950/leah";
var mongodb = require("mongodb");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(connectionString).then(function (db) {
            console.log("sucess");
            _this.db =db;
        }).catch(function (err) {
            console.log(err);
        });
    };
    return Database;
}());
exports.default = Database;