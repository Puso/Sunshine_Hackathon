"use strict";

const routes = require('express').Router();
const repositories = require('./repositories');
const featureFiles = require('./featurefiles');

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Connected'});
});

routes.use('/repositories', repositories);
routes.use('/featurefiles', featureFiles);

module.exports = routes;
