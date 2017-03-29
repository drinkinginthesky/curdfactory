'use strict';

var example = require('../controllers/fileName.server.controller');
var management = require('../utils/management.server.util');

// chineseDesc 路由

module.exports = function (app) {
    app.route('/routeurls/:exampleId')
        .get(example.getExampleById)
        .put(management.requireAdmin, example.updateExample)
        .delete(management.requireAdmin, example.deleteExampleById);

    app.route('/routeurls')
        .get(example.getExampleList)
        .post(management.requireAdmin, example.addExample);
};