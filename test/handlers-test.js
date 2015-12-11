'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 6, 'There are 6 different handlers')

tap.ok(handlers.getPostnummer, 'Handler has method getPostnummer')

tap.ok(handlers.getPostnummerByPostnummer, 'Handler has method getPostnummerByPostnummer')

tap.ok(handlers.searchPostnummer, 'Handler has method searchPostnummer')

tap.ok(handlers.getPostnummerByKommunenavn, 'Handler has method getPostnummerByKommunenavn')

tap.ok(handlers.getPostnummerByPoststed, 'Handler has method getPostnummerByPoststed')

tap.ok(handlers.getPostnummerByKategori, 'Handler has method getPostnummerByKategori')
