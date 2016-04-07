/**
 * Created by wchavarria-as on 29/03/2016.
 */
/**
 * Created by wchavarria-as on 29/03/2016.
 */
var app = require('../../server');
var request = require('supertest');
var chai = require('chai').expect;

describe('[EVENTS]', function(){

    it('should get all the events', function(done){
        request(app)
            .get('/events')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, resp){
                chai(resp.body).to.be.an('array');
                done();
            });
    });

    it('should create an event', function(done){
        request(app)
            .post('/events')
            .send({
                name: 'Testing Value'
            })
            .set('Accept', 'application/json')
            .end(function(err, resp){
                var event = resp.body;
                request(app)
                    .delete('/events/'+event.id)
                    .end(function(err, resp){
                        chai(resp.body).to.eql(event);
                        done();
                    });
            });
    });

    it('should delete an event', function(done){
        request(app)
            .post('/events')
            .send({
                name: 'Testing Value',
                id: 2
            })
            .set('Accept', 'application/json')
            .end(function(err, resp){
                var event = resp.body;
                request(app)
                    .delete('/events/'+event.id)
                    .end(function(err, resp){
                        chai(resp.body).to.eql(event);
                        done();
                    });
            });
    });

    it('should update an event', function(done){
        request(app)
            .post('/events')
            .send({
                name: 'Testing Value',
                id: 2
            })
            .set('Accept', 'application/json')
            .end(function(err, resp){
                var event = resp.body;
                request(app)
                    .put('/events/'+event.id)
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