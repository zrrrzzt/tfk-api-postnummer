'use strict'

var mongojs = require('mongojs')
var config = require('../config')
var db = mongojs(config.DB)
var zipcodes = db.collection('zipcodes')

function getPostnummer (request, reply) {
  var skipNum = request.query.skip ? parseInt(request.query.skip, 10) : 0
  var limitNum = request.query.limit ? parseInt(request.query.limit, 10) : 20
  zipcodes.find({}).skip(skipNum).limit(limitNum, function (error, data) {
    reply(error || data)
  })
}

function getPostnummerByPostnummer (request, reply) {
  var postnummer = request.params.postnummer
  zipcodes.find({ 'Postnummer': postnummer }, function (error, data) {
    reply(error || data)
  })
}

function getPostnummerByKommunenummer (request, reply) {
  var kommunenummer = request.params.kommunenummer
  zipcodes.find({ 'Kommunenummer': kommunenummer }, function (error, data) {
    reply(error || data)
  })
}

function searchPostnummer (request, reply) {
  zipcodes.find({ '$text': { '$search': request.params.searchText } },
    function (error, data) {
      reply(error || data)
    })
}

function getPostnummerByKommunenavn (request, reply) {
  var kommunenavn = request.params.kommunenavn.toUpperCase()
  zipcodes.find({ 'Kommunenavn': kommunenavn }, function (error, data) {
    reply(error || data)
  })
}

function getPostnummerByPoststed (request, reply) {
  var poststed = request.params.poststed.toUpperCase()
  zipcodes.find({ 'Poststed': poststed }, function (error, data) {
    reply(error || data)
  })
}

function getPostnummerByKategori (request, reply) {
  var skipNum = request.query.skip ? parseInt(request.query.skip, 10) : 0
  var limitNum = request.query.limit ? parseInt(request.query.limit, 10) : 20
  var kategori = request.params.kategori.toUpperCase()
  zipcodes.find({ 'Kategori': kategori }).skip(skipNum).limit(limitNum,
    function (error, data) {
      reply(error || data)
    })
}

module.exports.getPostnummer = getPostnummer

module.exports.searchPostnummer = searchPostnummer

module.exports.getPostnummerByPostnummer = getPostnummerByPostnummer

module.exports.getPostnummerByKommunenummer = getPostnummerByKommunenummer

module.exports.getPostnummerByKommunenavn = getPostnummerByKommunenavn

module.exports.getPostnummerByPoststed = getPostnummerByPoststed

module.exports.getPostnummerByKategori = getPostnummerByKategori
