'use strict'

var config = {
  'SERVER_PORT': process.env.SERVER_PORT || 3000,
  'DB': process.env.DB || 'mongodb://192.168.99.100:27017/tfk',
  'ZIPCODE_URL': process.env.ZIPCODE_URL || 'http://www.bring.no/hele-bring/produkter-og-tjenester/brev-og-postreklame/andre-tjenester/_attachment/159761?download=true'
}

module.exports = config
