'use strict'

// Some snippets from https://github.com/sindresorhus/norway-postal-codes

var fs = require('fs')
var path = require('path')
var wreck = require('wreck')
var iconv = require('iconv-lite')
var config = require('../config')

var ZIPCODE_URL = config.ZIPCODE_URL
var OUTPUT_DIR = 'data'

var HEADERS = [
  'Postnummer',
  'Poststed',
  'Kommunenummer',
  'Kommunenavn',
  'Kategori'
]

function write (filename, data) {
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), data, 'utf8')
}

function convert (data) {
  var list = []
  var csv = iconv.decode(data, 'latin1').trim()

  csv.split('\r\n').forEach(function (row) {
    var columns = row.split('\t').map(function (item) {
      return item.toString()
    })
    var json = {}
    HEADERS.forEach(function (header, index) {
      json[header] = columns[index]
    })

    list.push(json)
  })

  write('zipcodes.json', JSON.stringify(list, null, 2))
}

wreck.get(ZIPCODE_URL, {encoding: null}, function (error, response, payload) {
  if (error) {
    throw error
  }
  convert(payload)
})
