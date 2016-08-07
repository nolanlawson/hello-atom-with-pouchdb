#!/usr/bin/env bash

VERSION=$(node --eval "console.log(require('./node_modules/electron-prebuilt/package.json').version);")

cd node_modules/leveldown
HOME=~/.electron-gyp
../.bin/node-gyp rebuild --target=$VERSION --arch=x64 --dist-url=https://atom.io/download/atom-shell
