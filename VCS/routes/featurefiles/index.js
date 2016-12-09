"use strict";

const featurefiles = require('express').Router();
const all = require('./all');
const single = require('./single');

featurefiles.get('/', all);
featurefiles.get('/:fileId', single);

module.exports = featurefiles;
