/**
 * Created by wchavarria-as on 29/03/2016.
 */
var app = require('../../server');
var request = require('supertest');
var chai = require('chai').expect;

describe('[ATHLETES]', function(){

    it('should get all the athletes', function(done){
       request(app)
           .get('/api/athletes')
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(200)
           .end(function(err, resp){
               chai(resp.body).to.be.an('array');
               done();
           });
    });

    it('should get an specific athlete', function(done){
        request(app)
            .post('/api/athletes/')
            .send({
                name: 'Testing Value'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function(err, resp){
                var athlete = resp.body;
                request(app)
                    .get('/api/athletes/get/'+athlete.id)
                    .set('Accept','application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, resp){
                        chai(resp.body).to.be.an('object');
                        done();
                    });
            });
    });



    it('should create an athlete', function(done){
        request(app)
            .post('/api/athletes')
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

    it('should delete an athlete', function(done){
        request(app)
            .post('/api/athletes')
            .send({
                name: 'Testing Value'
            })
            .set('Accept', 'application/json')
            .end(function(err, resp){
                var athlete = resp.body;
                request(app)
                    .delete('/api/athletes/'+athlete.id)
                    .end(function(err, resp){
                        chai(resp.body).to.eql(athlete);
                        done();
                    });
            });
    });

    it('should update an athlete', function(done){
        request(app)
            .post('/api/athletes')
            .send({
                name: 'Testing Value'
            })
            .set('Accept', 'application/json')
            .end(function(err, resp){
                var athlete = resp.body;
                request(app)
                    .put('/api/athletes/'+ athlete.id)
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