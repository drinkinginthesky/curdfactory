'use strict';

var mongoose = require('mongoose');
var paginate = require('mongoose-paginate');
var exampleSchema = require('../schemas/fileName.server.schema')();

// 创建 Mongoose “chineseDesc”模式
var exampleMongooseSchema = new mongoose.Schema(exampleSchema);
// 使用数据分页的 mongoose 插件
exampleMongooseSchema.plugin(paginate);

// 创建“chineseDesc”模型
mongoose.model('Example', exampleMongooseSchema);
