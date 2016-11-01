'use strict';

var fileName = require('../controllers/fileName.server.controller');

// chineseDesc 路由

module.exports = function (app) {
    app.route('/examples/:exampleId')
        .get(fileName.getExampleById)
        .put(fileName.updateExample)
        .delete(fileName.deleteExampleById);
    app.post('/examples', fileName.addExample);
};