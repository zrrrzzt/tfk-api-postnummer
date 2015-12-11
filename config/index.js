'use strict'

var config = {
  'SERVER_PORT': process.env.SERVER_PORT || 3000,
  'DB': process.env.DB || 'mongodb://192.168.99.100:27017/tfk'
}

module.exports = config
