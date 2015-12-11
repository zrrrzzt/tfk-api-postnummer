[![Build Status](https://travis-ci.org/zrrrzzt/tfk-api-postnummer.svg?branch=master)](https://travis-ci.org/zrrrzzt/tfk-api-postnummer)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-api-postnummer
zipcodes API for tfk.

This solutions contains all zipcodes for Norway.

Datasource is the [zipcode registry]('http://www.bring.no/radgivning/sende-noe/adressetjenester/postnummer/_attachment/615732?_download=true&_ts=148c63b0dc0') from [Bring]('http://www.bring.no/').

Use it as standalone server or hapi-plugin.

You'll need to have an instance of MongoDB running. Configure the connection in /config.

An alternative is to use Docker and/or docker-compose.

## Installation

From GitHub

```sh
$ git clone git@github.com:zrrrzzt/tfk-api-postnummer.git
```

Run the setup script to install dependencies.

```sh
$ npm run setup
```

Import data
```sh
$ mongoimport -h <mongodbserver:port> -d tfk -c zipcodes data/zipcodes.json --jsonArray
```

Create indexes
```sh
$ mongo <mongodbserver:port>/tfk config/mongodb.indexes
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

**/postnummer/kommunenummer/{kommunenummer}**

List zipcodes by Kommunenumber

```
/postnummer/kommunenavn/0807
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

## Docker

Build the image

```sh
$ docker build -t tfk-api-postnummer .
```

Spin up a MongoDB container

```sh
$ docker run -d -p 27017:27017 --name mongodb mongo
```

Import data
```sh
$ mongoimport -h 192.168.99.100:27017 -d tfk -c zipcodes data/zipcodes.json --jsonArray
```

Create indexes
```sh
$ mongo 192.168.99.100:27017/tfk config/mongodb.indexes
```

Start the container
```sh
$ docker run -d -p 3000:3000 --name zipcodes tfk-api-postnummer
```

## Docker-compose
Probably the simplest version

```sh
$ docker-compose up
```

Import data
```sh
$ mongoimport -h 192.168.99.100:27017 -d tfk -c zipcodes data/zipcodes.json --jsonArray
```

Create indexes
```sh
$ mongo 192.168.99.100:27017/tfk config/mongodb.indexes
```