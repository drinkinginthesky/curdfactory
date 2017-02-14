'use strict';

var app = require('../../server');
var should = require('chai').should();
var request = require('supertest');
var mongoose = require('mongoose');
var UserBackgroundModel = mongoose.model('UserBackground');

describe.only('Testing userBackground model', function () {
    var agent, userBackgroundId;
    agent = request.agent(app);
    // before and after
    after(function (done) {
        UserBackgroundModel.remove(done);
    });

    // test case
    // create
    it('Should be able to create a userBackground success', function (done) {
        agent
            .post('/userbackgrounds')
            .send({
                smallImageUrl: 'http://static.idoool.com/upload/small/86cb7d750092d39cd0a280b24358b337.small.png',
                largeImageUrl: 'http://static.idoool.com/upload/large/86cb7d750092d39cd0a280b24358b337.large.png',
                title: '个人背景1',
                conditionIconList: ['http://192.168.1.123:8091/upload/web/starvisit.png', 'http://static.idoool.com/upload/web/firstsignin.png']
            })
            .expect(200, function (err, res) {
                userBackgroundId = res.body.data._id;
                done();
            });
    });

    //query
    it('Should be able to query a user background', function (done) {
        agent
            .get('/userbackgrounds/' + userBackgroundId)
            .expect(200, function (err, res) {
                res.body.data._id.should.equal(userBackgroundId);
                done();
            });
    });

    // query list
    it('Should be able to query user background list', function (done) {
        agent
            .get('/userbackgrounds')
            .expect(200, function (err, res) {
                res.body.data.length.should.equal(2);
                done();
            });
    });

    // delete one
    it('Should be able to delete a user background', function (done) {
        agent
            .delete('/userbackgrounds/' + userBackgroundId)
            .expect(200, function (err, res) {
                res.body.data.should.equal('删除成功');
                done();
            });
    });

});
