'use strict';

var config = require('./config');
var fs = require('fs');
var async = require('async');

/**
 * 首字母大写
 */
var capitalizeFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * 全小写
 */
var lowCase = function (string) {
    return string.toLowerCase();
};

/**
 * 向代码填充元素
 */
var formate = function (data) {
    return data.replace(/example/g, config.example)
        .replace(/Example/g, capitalizeFirstLetter(config.example))
        .replace(/chineseDesc/g, config.chineseDesc)
        .replace(/fileName/g, lowCase(config.example))
        .replace(/routeurl/g, lowCase(config.example));
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

/**
 * 主方法
 */
var generate = function (name, fileType) {
    return function (callback) {
        var file = fs.createReadStream('./source/' + fileType + '.js'),
            data = '',
            resultPath = './result/' + name + '.server.' + fileType + '.js';
        file.on("data", function (trunk) {
            data += trunk;
        });
        file.on("end", function () {
            var afterData = formate(data);
            writeFile(resultPath, afterData, callback);
        });
    };
};

async.series(
    [
        generate(lowCase(config.example), 'route'),
        generate(lowCase(config.example), 'controller'),
        generate(lowCase(config.example), 'controller.test')
    ],
    function (err, result) {
        console.log('success!');
    }
);