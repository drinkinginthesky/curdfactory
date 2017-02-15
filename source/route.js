'use strict';

var examples = require('../controllers/fileName.server.controller');

// chineseDesc 路由

module.exports = function (app) {
    app.route('/routeurls/:exampleId')
        .get(examples.getExampleById)
        .put(examples.updateExample)
        .delete(examples.deleteExampleById);

    app.route('/routeurls')
        .get(examples.getExampleList)
        .post(examples.addExample);
};