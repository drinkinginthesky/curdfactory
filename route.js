'use strict';

var lowerCaseName = require('../controllers/lowerCaseName.server.controller');
// chineseDesc路由
module.exports = function (app) {
    app.route('/lowerCaseName')
        .get(lowerCaseName.getUpperCaseNameInfo)
        .post(lowerCaseName.addUpperCaseName)
        .put(lowerCaseName.updateUpperCaseName)
        .delete(lowerCaseName.deleteUpperCaseName);
    app.get('/lowerCaseNames', lowerCaseName.getUpperCaseNames);
}