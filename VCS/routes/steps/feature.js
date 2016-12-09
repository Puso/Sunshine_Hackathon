"use strict";

const util = require('./util');
const _ = require('lodash');

module.exports = (req, res) => {
    let content = util.combine(false);
    const featurefileId = req.params.featurefileId * 1;
    let combined = util.combine();
    let filtered = _.flatten(combined.map((c) => c.files)).filter((c) => c.fileId == featurefileId);        
    res.status(200).json({steps: filtered});
}

