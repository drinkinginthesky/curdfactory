'use strict';

// 定义“chineseDesc”模式
module.exports = function () {
    var exampleSchema = {
        // 添加到数据库的时间，默认生成
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        }
    };
    return exampleSchema;
};
