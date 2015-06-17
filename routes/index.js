'use strict';

var handlers = require('../handlers');
var routes = [
  {
    method: 'GET',
    path: '/postnummer',
    handler: handlers.getPostnummer
  },
  {
    method: 'GET',
    path: '/postnummer/{postnummer}',
    handler: handlers.getPostnummerByPostnummer
  },
  {
    method: 'GET',
    path: '/postnummer/search/{searchText}',
    handler: handlers.searchPostnummer
  },
  {
    method: 'GET',
    path: '/postnummer/kommunenavn/{kommunenavn}',
    handler: handlers.getPostnummerByKommunenavn
  },
  {
    method: 'GET',
    path: '/postnummer/poststed/{poststed}',
    handler: handlers.getPostnummerByPoststed
  },
  {
    method: 'GET',
    path: '/postnummer/kategori/{kategori}',
    handler: handlers.getPostnummerByKategori
  }
];

module.exports = routes;