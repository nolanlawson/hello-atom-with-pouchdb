'use strict';

var process = require('process');
var path = require('path');
var VERSION = require('./node_modules/electron/package.json').version;
var gypPath = path.join(__dirname, 'node_modules/.bin') + "/node-gyp";

var exec = require('child_process').exec,
  cmd = [
    gypPath,
    "rebuild",
    "--target=" + VERSION,
    "--arch=x64",
    "--dist-url=https://atom.io/download/atom-shell",
    "--msvs_version=2013"
  ].join(' ');

try {
  process.chdir('node_modules/leveldown');

  exec(cmd, (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
} catch (err) {
  console.log(err);
}
