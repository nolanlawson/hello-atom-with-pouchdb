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

PouchDB.plugin(require('pouchdb-adapter-websql'));
var websqlDB = new PouchDB('mydb-websql', {adapter: 'websql'});

websqlDB.info().then(function (info) {
  $('#websql').innerHTML = '&#10004; We can use PouchDB with WebSQL!';
}).catch(function (err) {
  $('#websql').innerHTML = 'Error for WebSQL';
});

// File paths for LevelDB and node-websql

var {remote} = require('electron');
var path = require('path');

var leveldbPath = path.join(remote.app.getPath('userData'), 'mydb-leveldb');
var sqlitePath = path.join(remote.app.getPath('userData'), 'mydb-sqlite');

// LevelDB

var NodePouchDB = require('pouchdb');

var leveldbDB = new NodePouchDB(leveldbPath);

leveldbDB.info().then(function (info) {
  $('#leveldb').innerHTML = '&#10004; We can use PouchDB with LevelDB!';
}).catch(function (err) {
  $('#leveldb').innerHTML = 'Error for LevelDB';
});

// node-websql

NodePouchDB.plugin(require('pouchdb-adapter-node-websql'));
var sqliteDB = new NodePouchDB(sqlitePath, {adapter: 'websql'});

sqliteDB.info().then(function (info) {
  $('#sqlitedb').innerHTML = '&#10004; We can use PouchDB with node-websql (SQLite)!';
}).catch(function (err) {
  $('#sqlitedb').innerHTML = 'Error for node-websql (SQLite)';
});

})();
