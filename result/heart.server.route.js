'use strict';

var fileName = require('../controllers/fileName.server.controller');

// chineseDesc 路由

module.exports = function (app) {
    app.route('/hearts/:heartId')
        .get(fileName.getHeartById)
        .post(fileName.addHeart)
        .put(fileName.updateHeart)
        .delete(fileName.deleteHeartById);
}