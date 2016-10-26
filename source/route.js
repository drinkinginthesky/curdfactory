'use strict';

var fileName = require('../controllers/fileName.server.controller');

// chineseDesc 路由

module.exports = function (app) {
    app.route('/examples/:exampleId')
        .get(fileName.getExampleById)
        .post(fileName.addExample)
        .put(fileName.updateExample)
        .delete(fileName.deleteExampleById);
};