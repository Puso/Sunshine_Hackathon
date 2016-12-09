"use strict";

const routes = require('express').Router();
const repositories = require('./repositories');
const featureFiles = require('./featurefiles');
const steps = require('./steps');

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Connected'});
});

routes.use('/repositories', repositories);
routes.use('/featurefiles', featureFiles);
routes.use('/steps', steps);

module.exports = routes;
