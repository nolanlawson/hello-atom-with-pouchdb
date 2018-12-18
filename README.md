# Hello Electron with Pouchdb

This is a demo app that integrates PouchDB with Electron.

It shows how to use any of the following PouchDB adapters:

  * IndexedDB (browser-style)
  * WebSQL (browser-style)
  * LevelDB (Node-style)
  * SQLite (Node-style)

The app looks like this:

![screenshot](screenshot2.png)

## Install and run

Check out the code:

    git clone https://github.com/nolanlawson/hello-electron-with-pouchdb
    cd hello-electron-with-pouchdb

Then npm install:

    npm install

And run:

    npm start

Build:

    npm run build

If it doesn't work, you might not have the latest version of Node/npm. Try installing the latest using [nvm](https://github.com/creationix/nvm).

## Browser vs Node

To build the application we use [electron-builder](https://github.com/electron-userland/electron-builder). You'll be able to build the app for macOS/Linux/Windows, but it must be compiled on the target platform. 

In order to get the native dependencies (LevelDB and sqlite3) to work properly with the Electron version, we include the script `"postinstall": "electron-builder install-app-deps"`.

If this step doesn't work for you (e.g. because you are using an older version of Node, you're using Windows, etc.), you can remove the `postinstall` script from `package.json`, replace the `pouchdb` dependency with `pouchdb-browser`, and just use the browser adapters (IndexedDB/WebSQL) rather than the Node.js adapter (LevelDB).

See [pouchdb-electron](https://github.com/nolanlawson/pouchdb-electron) for more installation instructions.

## node-websql (sqlite3) adpater

If you want to run PouchDB in "Node.js style" but using SQLite, then you should use `pouchdb-adapter-node-websql`, as demonstrated in this project.

Like LevelDB, this requires reinstalling a native module (in this case, [SQLite3](https://github.com/mapbox/node-sqlite3)). If this fails, you can just remove the `pouchdb-adapter-node-websql` dependency from `package.json` and also the `postinstall` script.
