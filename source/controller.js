'use strict';

var mongoose = require('mongoose');
var ExampleModel = mongoose.model('Example');
var utils = require('../utils/utils.server.util');
var VALUE = require('../utils/value.server.util');

/**
 * 创建chineseDesc信息
 */
exports.addExample = function (req, res) {
    var example;
    example = new ExampleModel({

    });
    example.save(function (err) {
        if (!!err) {
            utils.respondFailure(res);
            return;
        }
        utils.respondSuccess(res, example);
    });
};

/**
 * 更新chineseDesc信息
 * @body {params} exampleId chineseDescID
 */
exports.updateExample = function (req, res) {
    var exampleId;
    exampleId = req.params.exampleId;
    if (!exampleId) {
        utils.respondFailure(res);
        return;
    }
    ExampleModel
        .findById(exampleId)
        .exec(function (err, example) {
            if (!!err || !example) {
                utils.respondFailure(res);
                return;
            }

        });
};

/**
 * 根据exampleId查询chineseDesc信息
 * @param {string} exampleId chineseDescID
 */
exports.getExampleById = function (req, res) {
    var exampleId = req.params.exampleId;
    if (!exampleId) {
        utils.respondFailure(res, '缺少参数！');
        return;
    }
    ExampleModel
        .findById(exampleId)
        .lean()
        .exec(function (err, example) {
            if (!!err || !example) {
                utils.respondFailure(res);
                return;
            }
            utils.respondSuccess(res, example);
        });
};

/**
 *  获取chineseDesc信息列表
 *  @query {Integer} offset 从哪一条开始
 *  @query {Integer} limit  要取多少条
 */
exports.getExampleList = function (req, res) {
    var queryDoc, options, offset, limit;
    offset = req.query.offset
        ? parseInt(req.query.offset)
        : 0;
    limit = req.query.limit
        ? parseInt(req.query.limit)
        : 20;
    queryDoc = {};
    options = {
        offset: offset,
        limit: limit,
        sort: {createdAt: -1}
    };
    ExampleModel.paginate(queryDoc, options, function (err, result) {
        if (!!err || !result) {
            utils.respondFailure(res);
            return;
        }
        utils.respondSuccess(res, {
            list: result.docs,
            isLastPage: result.docs.length < limit
        });
    });
};

/**
 * 删除一条chineseDesc
 * @param {string} exampleId chineseDescID
 * @query {string} exampleId chineseDescID
 */
exports.deleteExampleById = function (req, res) {
    var exampleId;
    exampleId = req.params.exampleId || req.query.exampleId;
    if (!exampleId) {
        utils.respondFailure(res, '缺少参数');
        return;
    }
    ExampleModel.findOneAndRemove({_id: exampleId}, function (err, example) {
        if (!!err) {
            utils.respondFailure(res, '删除失败');
            return;
        }
        utils.respondSuccess(res, '删除成功');
    });
};
