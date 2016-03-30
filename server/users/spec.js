/**
 * Created by wchavarria-as on 29/03/2016.
 */
var app = require('../server');
var request = require('supertest');
var chai = require('chai').expect;

describe('[USERS]', function(){

    it('should get all the users', function(done){
       request(app)
           .get('/users')
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(200)
           .end(function(err, resp){
               chai(resp.body).to.be.an('array');
               done();
           });
    });

    it('should get an specific users', function(done){
        request(app)
            .post('/users/')
            .send({
                name: 'Testing Value'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function(err, resp){
                var user = resp.body;
                request(app)
                    .get('/users/get/'+user.id)
                    .set('Accept','application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, resp){
                        chai(resp.body).to.be.an('object');
                        done();
                    });
            });
    });



    it('should create an user', function(done){
        request(app)
            .post('/users')
            .send({
                name: 'Testing Value'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /js on/)
            .expect(201)
            .end(function(err, resp){
                chai(resp.body).to.be.an('object');
                done();
            })
    });

    it('should delete an user', function(done){
        request(app)
            .post('/users')
            .send({
                name: 'Testing Value'
            })
            .set('Accept', 'application/json')
            .end(function(err, resp){
                var user = resp.body;
                request(app)
                    .delete('/users/'+user.id)
                    .end(function(err, resp){
                        chai(resp.body).to.eql(user);
                        done();
                    });
            });
    });

    it('should update an user', function(done){
        request(app)
            .post('/users')
            .send({
                name: 'Testing Value'
            })
            .set('Accept', 'application/json')
            .end(function(err, resp){
                var user = resp.body;
                request(app)
                    .put('/users/'+ user.id)
                    .send({
                        name: 'Testing Value Updated'
                    })
                    .end(function(err, resp){
                        chai(resp.body.name).to.equal('Testing Value Updated');
                        done();
                    });
            });
    });
});