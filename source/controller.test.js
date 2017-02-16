'use strict';

var app = require('../../server');
var should = require('chai').should();
var request = require('supertest');
var mongoose = require('mongoose');
var ExampleModel = mongoose.model('Example');

describe.only('Testing example controller', function () {
    var agent, exampleId;
    agent = request.agent(app);
    // before and after
    after(function (done) {
        ExampleModel.remove(done);
    });

    // test case
    // create
    it('Should be able to create a example success', function (done) {
        agent
            .post('/routeurls')
            .send({})
            .expect(200, function (err, res) {
                exampleId = res.body.data._id;
                done();
            });
    });

    //query
    it('Should be able to query a example', function (done) {
        agent
            .get('/routeurls/' + exampleId)
            .expect(200, function (err, res) {
                res.body.data._id.should.equal(exampleId);
                done();
            });
    });

    // query list
    it('Should be able to query example list', function (done) {
        agent
            .get('/routeurls?offset=0&limit=20')
            .expect(200, function (err, res) {
                res.body.data.length.should.equal(1);
                done();
            });
    });

    // delete one
    it('Should be able to delete a example', function (done) {
        agent
            .delete('/routeurls/' + exampleId)
            .expect(200, function (err, res) {
                res.body.data.should.equal('删除成功');
                done();
            });
    });

});
