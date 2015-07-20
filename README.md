# tfk-api-postnummer
zipcodes API for tfk.

This solutions contains all zipcodes for Norway.

Datasource is the [zipcode registry]('http://www.bring.no/radgivning/sende-noe/adressetjenester/postnummer/_attachment/615732?_download=true&_ts=148c63b0dc0') from [Bring]('http://www.bring.no/').

Use it as standalone server or hapi-plugin.

## Installation

From GitHub

```sh
$ git clone git@github.com:zrrrzzt/tfk-api-postnummer.git
```

You'll need to have an instance of MongoDB running. Configure the connection in /config.

Run the import script to get the zipcodedata in the database.

```sh
$ npm run import
```

Finally the setup script to install dependencies and configuring the indexes for the database.

```sh
$ npm run setup
```

## Running the server

As standalone

```sh
$ npm run start
```

As hapi plugin

```javascript
'use strict';

var Hapi = require('hapi');
var config = require('./config');
var server = new Hapi.Server();
var zipcodeService = require('./index');

server.connection({
  port:config.SERVER_PORT,
  routes:{cors:{credentials:true}}
});

server.register([
  {
    register: zipcodeService,
    options: {}
  }
], function(err) {
  if (err) {
    console.error('Failed to load a plugin:', err);
  }
});

server.start(function() {
  console.log('Server running at:', server.info.uri);
});
```

## Routes

**/postnummer**

List all zipcodes, defaults to batches of 20.

Use skip and limit for pagination

```
/postnummer?skip=50&limit=10
```

**/postnummer/{postnummer}**

Get zipcodes by... ehrm zipcode

```
/postnummer/3681
```

**/postnummer/search/{searchText}**

Search for zipcodes in Kommunenavn and Poststed

```
/postnummer/search/notodden
```

**/postnummer/kommunenavn/{kommunenavn}**

List zipcodes by Kommunenavn

```
/postnummer/kommunenavn/NOTODDEN
```

**/postnummer/poststed/{poststed}**

List zipcodes by Poststed

```
/postnummer/poststed/NOTODDEN
```

**/postnummer/kategori/{kategori}**

List zipcodes by Kategori, defaults to batches of 20.

Use skip and limit for pagination

```
/postnummer/kategori/G
```