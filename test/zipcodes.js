'use strict';

var mongojs = require('mongojs');
var wreck = require('supertest');
var server = require('../server');
var config = require('../config');

wreck = wreck('http://localhost:' + config.SERVER_PORT);

describe('zipcodes', function() {

  before(function() {
    server.start();
  });

  after(function() {
    server.stop();
  });

  describe('GET /postnummer', function() {
    it('responds with json', function(done) {
      wreck
        .get('/postnummer')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /postnummer/search/Notodden', function() {
    it('responds with json', function(done) {
      wreck
        .get('/postnummer/search/Notodden')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /postnummer/3681', function() {
    it('responds with json', function(done) {
      wreck
        .get('/postnummer/3681')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /postnummer/poststed/NOTODDEN', function() {
    it('responds with json', function(done) {
      wreck
        .get('/postnummer/poststed/NOTODDEN')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /postnummer/kommunenavn/NOTODDEN', function() {
    it('responds with json', function(done) {
      wreck
        .get('/postnummer/kommunenavn/NOTODDEN')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /postnummer/kategori/G', function() {
    it('responds with json', function(done) {
      wreck
        .get('/postnummer/kategori/G')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

});