"use strict";

const util = require('./util');
const _ = require('lodash');

module.exports = (req, res) => {
    let repos = util.combine();
    const repoId = req.params.repoId * 1;
    let foundRepo = repos.find((r) => r.repositoryId === repoId);
    console.log(foundRepo);
    if(_.isUndefined(foundRepo))
    {
        res.status(404).send(`The repo ${repoId} does not exist`);
    }
    res.status(200).json(foundRepo);
}

