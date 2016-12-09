"use strict";

const util = require('./util');

module.exports = (req, res) => {
    let repos = util.combine();
    res.status(200).json({repositories:repos});
}

