'use strict';

var mongoose = require('mongoose');
var HeartModel = mongoose.model('Heart');
var utils = require('../utils/utils.server.util');
var VALUE = require('../utils/value.server.util');

/**
 * 增加chineseDesc信息
 */
 exports.addHeart = function (req, res) {
    var heart;
    heart = new HeartModel({});
    heart.save(function (err) {
        if (!!err) {
            utils.respondFailure(res);
            return;
        }
        utils.respondSuccess(res, heart);
    });
};

/**
 *  更新chineseDesc信息
 *
 */
exports.updateHeart = function (req, res) {
    var heartId;
    heartId = req.params.heartId;
    if (!!heartId) {
        utils.respondFailure(res);
        return;
    }

};

/**
 * 根据heartId查询chineseDesc信息
 */
exports.getHeartById = function (req, res) {
    var heartId = req.params.heartId;
    if (!heartId) {
        utils.respondFailure(res, '缺少参数！');
        return;
    }
    HeartModel.findById(heartId, function (err, heart) {
        if (!!err) {
            utils.respondFailure(res);
            return;
        }
        utils.respondSuccess(res, heart);
    });
};

/**
 *  获取chineseDesc信息列表
 *  @query {Integer} offset 从哪一条开始
 *  @query {Integer} limit  要取多少条
 */
exports.getHeartList = function (req, res) {
    var queryDoc, options, offset, limit;
    options = {
        offset: parseInt(req.query.offset),
        limit: parseInt(req.query.limit),
        sort: {createAt: -1}
    };
    HeartModel.paginate({}, options, function (err, lowerCaseNameList) {
        if (!!err) {
            utils.respondFailure(res);
            return;
        }
        utils.respondSuccess(res, lowerCaseNameList.docs);
    });
};

/**
 *  删除一条chineseDesc
 */
exports.deleteHeartById = function (req, res) {
    var heartId;
    heartId = req.params.heartId || req.query.heartId;
    if (!heartId) {
        utils.respondFailure(res, '缺少参数！');
        return;
    }
    HeartModel.remove({_id: heartId}, function (err) {
        if (!!err) {
            utils.respondFailure(res, '删除失败！');
            return;
        }
        utils.respondSuccess(res);
    });
};
