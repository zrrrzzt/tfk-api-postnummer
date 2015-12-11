'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 7, 'There are 7 different handlers')

tap.ok(handlers.getPostnummer, 'Handler has method getPostnummer')

tap.ok(handlers.getPostnummerByPostnummer, 'Handler has method getPostnummerByPostnummer')

tap.ok(handlers.searchPostnummer, 'Handler has method searchPostnummer')

tap.ok(handlers.getPostnummerByKommunenummer, 'Handler has method getPostnummerByKommunenummer')

tap.ok(handlers.getPostnummerByKommunenavn, 'Handler has method getPostnummerByKommunenavn')

tap.ok(handlers.getPostnummerByPoststed, 'Handler has method getPostnummerByPoststed')

tap.ok(handlers.getPostnummerByKategori, 'Handler has method getPostnummerByKategori')
