"use strict";

const app = require('express')();

const routes = require('./routes');

app.use('/', routes);

app.listen(3500, () => {
    console.log("App listening on port 3500");
});