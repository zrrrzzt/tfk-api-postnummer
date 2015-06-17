'use strict';

var mongojs = require('mongojs');
var config = require('./config');
var db = mongojs(config.DB);
var zipcodes = db.collection('zipcodes');
var textIndexFields = {
  'Poststed': 'text',
  'Kommunenavn': 'text'
};
var jobsDone = 0;
var jobsToDo = 6;

function areWeDoneYet() {
  jobsDone++;
  if (jobsDone === jobsToDo) {
    console.log('Everything\'s shiny, Cap\'n. Not to fret.');
    process.exit(0);
  }
}

zipcodes.ensureIndex(textIndexFields, {"default_language": "nb"}, function(error, data){
  if (error) {
    console.error(error);
  } else {
    console.log('TextIndex created');
    console.log(data);
  }
  areWeDoneYet();
});

zipcodes.ensureIndex({'Poststed': 1}, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log('Index OK for Poststed');
    console.log(data);
    areWeDoneYet();
  }
});

zipcodes.ensureIndex({'Kommunenavn': 1}, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log('Index OK for Kommunenavn');
    console.log(data);
    areWeDoneYet();
  }
});

zipcodes.ensureIndex({'Postnummer': 1}, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log('Index OK for Postnummer');
    console.log(data);
    areWeDoneYet();
  }
});

zipcodes.ensureIndex({'Kommunenummer': 1}, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log('Index OK for Kommunenummer');
    console.log(data);
    areWeDoneYet();
  }
});

zipcodes.ensureIndex({'Kategori': 1}, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log('Index OK for Kommunenummer');
    console.log(data);
    areWeDoneYet();
  }
});