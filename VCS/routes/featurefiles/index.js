"use strict";

const featurefiles = require('express').Router();
const all = require('./all');

featurefiles.get('/', all);

module.exports = featurefiles;
