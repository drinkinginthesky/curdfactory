'use strict';

var mongoose = require('mongoose');
var UpperCaseNameModel = mongoose.model('UpperCaseName');
var utils = require('../utils/utils.server.util');
var VALUE = require('../utils/value.server.util');

/**
 * 根据chineseDescID查询chineseDesc信息
 * @param {String}  lowerCaseNameId chineseDescID
 */
exports.getUpperCaseNameInfo = function (req, res) {
    UpperCaseNameModel.findById(req.query.lowerCaseNameId, function (err, lowerCaseName) {
        if (!!err) {
            utils.respondFailure(res);
            return;
        }
        utils.respondSuccess(res, lowerCaseName);
    });
};

/**
 * 增加chineseDesc信息
 */
 exports.addUpperCaseName = function (req, res) {
    var lowerCaseName;
    lowerCaseName = new UpperCaseNameModel({


    });
    lowerCaseName.save(function (err) {
        if (!!err) {
            utils.respondFailure(res);
            return;
        }
        utils.respondSuccess(res, lowerCaseName);
    })
 };

/**
 *  获取chineseDesc信息列表
 *  @query {Integer} offset 从哪一条开始
 *  @query {Integer} limit  要取多少条
 */
exports.getUpperCaseNames = function (req, res) {
    var queryDoc,options, offset, limit;
    options = {
        offset: parseInt(req.query.offset),
        limit: parseInt(req.query.limit),
        sort: {createAt: -1}
    }
    UpperCaseNameModel.paginate({}, options, function (err, lowerCaseNameList) {
        if (!!err) {
            utils.respondFailure(res);
            return;
        }
        utils.respondSuccess(res, lowerCaseNameList.docs);
    });
}

/**
 *  删除一条chineseDesc
 *  @body {String} lowerCaseNameId chineseDescID
 */
exports.deleteUpperCaseName = function (req, res) {
    var lowerCaseNameId = req.body.lowerCaseNameId;
    if (!!lowerCaseNameId) {
        utils.respondFailure(res);
        return;
    }
    UpperCaseNameModel.remove({_id: lowerCaseNameId}, function (err) {
        if (!!err) {
            utils.respondFailure(res);
            return;
        }
        utils.respondSuccess(res);
    });
}

/**
 *  更新一个chineseDesc
 *
 */
exports.updateUpperCaseName = function (req, res) {
    var lowerCaseNameId,
    lowerCaseNameId = req.body.lowerCaseNameId;
    if (!!lowerCaseNameId) {
        utils.respondFailure(res);
        return;
    }

}