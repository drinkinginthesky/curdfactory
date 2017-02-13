'use strict';

var examples = require('../controllers/fileName.server.controller');

// chineseDesc 路由

module.exports = function (app) {
    app.route('/route/:exampleId')
        .get(examples.getExampleById)
        .put(examples.updateExample)
        .delete(examples.deleteExampleById);

    app.get('/route', examples.getExampleList)
        .post('/route', examples.addExample);
};