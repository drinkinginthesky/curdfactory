'use strict';

var examples = require('../controllers/fileName.server.controller');

// chineseDesc 路由

module.exports = function (app) {
    app.route('/examples/:exampleId')
        .get(examples.getExampleById)
        .put(examples.updateExample)
        .delete(examples.deleteExampleById);

    app.get('/examples', examples.getExampleList)
        .post('/examples', examples.addExample);
};