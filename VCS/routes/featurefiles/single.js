"use strict";

const util = require('./util');
const _ = require('lodash');

module.exports = (req, res) => {
    let featureFiles = util.combine();
    const fileId = req.params.fileId * 1;
    let foundFF = featureFiles.find((r) => r.fileId === fileId);
    if(_.isUndefined(foundFF))
    {
        res.status(404).send(`The feature file ${foundFF} does not exist`);
    }
    res.status(200).json(foundFF);
}

