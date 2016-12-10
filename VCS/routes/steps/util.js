"use strict";

const util = require('../featurefiles/util');
const _ = require('lodash');

let combine = () => {
    let combined = util.combine(true);
    let repos = _.uniqBy(combined, 'repositoryId').map((r) => ({repositoryId: r.repositoryId, files: []}));

    combined.forEach((c) => {
        let index = _.findIndex(repos, (r) => r.repositoryId == c.repositoryId);
        let tmpObj = _.pick(c, ['fileId', 'fileName', 'numberOfLines', 'fileContent']);
        repos[index].files.push(tmpObj);        
    });
    return repos;
};

module.exports = {
    combine: combine
}