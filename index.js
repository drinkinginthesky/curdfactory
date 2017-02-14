'use strict';

var config = require('./config');
var fs = require('fs');
var async = require('async');

var formate = function (data) {
    return data.replace(/example/g, config.example)
        .replace(/Example/g, config.Example)
        .replace(/chineseDesc/g, config.chineseDesc)
        .replace(/fileName/g, config.fileName)
        .replace(/route/g, config.example.toLowerCase());
};

var writeFile = function (path, data, callback) {
    fs.writeFile(path, data, 'utf8', function (err) {
        if (!!err) {
            callback(err);
            return;
        }
        callback();
    });
};

var controllerfn = function (callback) {
    var controller = fs.createReadStream('./source/controller.js');
    var data = '';
    var resultPath = './result/' + config.fileName + '.server.controller.js';
    controller.on("data", function (trunk) {
        data += trunk;
    });
    controller.on("end", function () {
        var afterData = formate(data);
        writeFile(resultPath, afterData, callback);
    });
};

var routefn = function (callback) {
    var route = fs.createReadStream('./source/route.js');
    var data = '';
    var resultPath = './result/' + config.fileName + '.server.route.js';
    route.on("data", function (trunk) {
        data += trunk;
    });
    route.on("end", function () {
        var afterData = formate(data);
        writeFile(resultPath, afterData, callback);
    });
};

async.series(
    [
        controllerfn,
        routefn
    ],
    function (err, result) {
        console.log('success!');
    }
);