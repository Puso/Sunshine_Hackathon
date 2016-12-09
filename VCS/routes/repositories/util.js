"use strict";
const repos1 = require('../../models/repos/repos-1.json');
const repos2 = require('../../models/repos/repos-2.json');
const repos3 = require('../../models/repos/repos-3.json');
const moment = require('moment');

let combine = () => {
    let repos = repos1.repositories;
    let start = moment("12-09-2016", "MM-DD-YYYY");
    for(let i = 1; i < 3; ++i)
    {
        if(moment() >= moment(start).add(i, 'days'))
        {
            repos = repos.concat(repos2.repositories);
        }
    }

    return repos;
};

module.exports = {
    combine: combine
}