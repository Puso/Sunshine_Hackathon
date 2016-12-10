"use strict";

const util = require('./util');
const _ = require('lodash');

module.exports = (req, res) => {
    let content = util.combine(false);
    const repositoryId = req.params.repositoryId * 1;
    let filtered = util.combine().filter((c) => c.repositoryId == repositoryId);           
    res.status(200).json({steps: filtered[0].files});
}

