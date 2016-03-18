"use strict";

const tty = require("tty.js");
const fs = require('fs');

process.title = "MyLab";

const conf = JSON.parse(fs.readFileSync('./MyLab.json', 'utf8'));
const app = tty.createServer(conf);

app.listen();