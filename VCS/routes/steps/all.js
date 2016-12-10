"use strict";

const util = require('./util');

module.exports = (req, res) => {
    let repos = util.combine(true);
    res.status(200).json({steps:repos});
}
