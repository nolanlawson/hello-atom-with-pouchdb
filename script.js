(function () {

'use strict';

var $ = document.querySelector.bind(document);

// IndexedDB

var db = new PouchDB('mydb-idb');

db.info().then(function (info) {
  $('#idb').innerHTML = '&#10004; We can use PouchDB with IndexedDB!';
}).catch(function (err) {
  $('#idb').innerHTML = 'Error for IndexedDB';
});

// WebSQL

var websqlDB = new PouchDB('mydb-websql', {adapter: 'websql'});

websqlDB.info().then(function (info) {
  $('#websql').innerHTML = '&#10004; We can use PouchDB with WebSQL!';
}).catch(function (err) {
  $('#websql').innerHTML = 'Error for WebSQL';
});

// LevelDB

var NodePouchDB = require('pouchdb');

var leveldbDB = new NodePouchDB('mydb-leveldb');

leveldbDB.info().then(function (info) {
  $('#leveldb').innerHTML = '&#10004; We can use PouchDB with LevelDB!';
}).catch(function (err) {
  $('#leveldb').innerHTML = 'Error for LevelDB';
});

})();
