'use strict';

var example = require('../controllers/fileName.server.controller');

// chineseDesc 路由

module.exports = function (app) {
    app.route('/routeurls/:exampleId')
        .get(example.getExampleById)
        .put(example.updateExample)
        .delete(example.deleteExampleById);

    app.route('/routeurls')
        .get(example.getExampleList)
        .post(example.addExample);
};