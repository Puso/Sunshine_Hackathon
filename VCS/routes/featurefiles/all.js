"use strict";

const util = require('./util');

module.exports = (req, res) => {
    let repos = util.combine(false);
    res.status(200).json({featurefiles:repos});
}

