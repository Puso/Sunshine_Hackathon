"use strict";

const repositories = require('express').Router();
const all = require('./all');
const single = require('./single');

repositories.get('/', all);
repositories.get('/:repoId', single);

module.exports = repositories;
