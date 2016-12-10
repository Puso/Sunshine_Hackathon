"use strict";

const steps = require('express').Router();
const all = require('./all');
const feature = require('./feature');
const repository = require('./repository');

steps.get('/', all);
steps.get('/featurefile/:featurefileId', feature);
steps.get('/repository/:repositoryId', repository);

module.exports = steps;
