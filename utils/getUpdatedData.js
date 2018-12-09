// Some snippets from https://github.com/sindresorhus/norway-postal-codes

const fs = require('fs')
const path = require('path')
const wreck = require('wreck')
const iconv = require('iconv-lite')
const { ZIPCODE_URL } = require('../config')
const OUTPUT_DIR = 'data'

const HEADERS = [
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

wreck.get(ZIPCODE_URL, { encoding: null }, function (error, response, payload) {
  if (error) {
    throw error
  }
  convert(payload)
})
