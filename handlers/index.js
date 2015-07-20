'use strict';

var mongojs = require('mongojs');
var helpers = require('../helpers');
var config = require('../config');
var db = mongojs(config.DB);
var zipcodes = db.collection('zipcodes');

function getPostnummer(request, reply) {
  var skipNum = request.query.skip ? parseInt(request.query.skip, 10) : 0;
  var limitNum = request.query.limit ? parseInt(request.query.limit, 10) : 20;
  zipcodes.find({}).skip(skipNum).limit(limitNum, function(error, data) {
    helpers.handleReply(error, data, request, reply);
  });
}

function getPostnummerByPostnummer(request, reply) {
  var postnummer = parseInt(request.params.postnummer, 10);
  zipcodes.find({'Postnummer':postnummer}, function(error, data) {
    helpers.handleReply(error, data, request, reply);
  });
}

function searchPostnummer(request, reply) {
  zipcodes.find({'$text':{'$search':request.params.searchText}},
    function(error, data) {
    helpers.handleReply(error, data, request, reply);
  });
}

function getPostnummerByKommunenavn(request, reply) {
  var kommunenavn = request.params.kommunenavn.toUpperCase();
  zipcodes.find({'Kommunenavn':kommunenavn}, function(error, data) {
    helpers.handleReply(error, data, request, reply);
  });
}

function getPostnummerByPoststed(request, reply) {
  var poststed = request.params.poststed.toUpperCase();
  zipcodes.find({'Poststed': poststed}, function(error, data) {
    helpers.handleReply(error, data, request, reply);
  });
}

function getPostnummerByKategori(request, reply) {
  var skipNum = request.query.skip ? parseInt(request.query.skip, 10) : 0;
  var limitNum = request.query.limit ? parseInt(request.query.limit, 10) : 20;
  var kategori = request.params.kategori.toUpperCase();
  zipcodes.find({'Kategori':kategori}).skip(skipNum).limit(limitNum,
    function(error, data) {
    helpers.handleReply(error, data, request, reply);
  });
}

module.exports.getPostnummer = getPostnummer;

module.exports.searchPostnummer = searchPostnummer;

module.exports.getPostnummerByPostnummer = getPostnummerByPostnummer;

module.exports.getPostnummerByKommunenavn = getPostnummerByKommunenavn;

module.exports.getPostnummerByPoststed = getPostnummerByPoststed;

module.exports.getPostnummerByKategori = getPostnummerByKategori;
