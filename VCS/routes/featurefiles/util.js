"use strict";

const moment = require('moment');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const repos = require('../repositories/util').combine();

const randomSteps = require('../../models/featurefiles/random.json');

let combine = (stepsOnly = true) => {

    let start = moment("12-09-2016", "MM-DD-YYYY");
    let mit = moment();
    let saturday = moment() >= moment(start).add(1, 'days');
    let sunday = moment() >= moment(start).add(2, 'days');
   
    let pathRoot = `${path.resolve(process.cwd())}\\models\\featurefiles\\basic`;
    let directories = fs.readdirSync(pathRoot);
    let fileContents = directories.map((i) => {
            let parsed = parseContents(fs.readFileSync(`${pathRoot}\\${i}`).toString(), stepsOnly);
            return (parsed == null)? null : Object.assign({fileName: i}, parsed);
    });
    fileContents = fileContents.filter((f) => f !== null);
    return fileContents.concat(createRandomData(stepsOnly));
};

let createRandomData = (stepsOnly) => {
    let features = [];
    let featureCt = 50;
    while(featureCt >=0)
    {
        
        let fileId = Math.floor(Math.random() * (2000 - 1000) + 1000);
        let repoId = _.sample(repos).repositoryId;
        
        let prepend = (stepsOnly)?[]: [`@repo-${repoId}`, `@file-${fileId}`];
        let fileContent = prepend.concat(buildFileContent());
        features.push({
            fileName:`RandomFeature${featureCt}.feature`,
            fileId: fileId,
            repositoryId: repoId,
            numberOfLines: fileContent.length,
            fileContent: fileContent
        });
        --featureCt;
    }
    return features;
};

let buildFileContent = () => {
    let content = [];
    let rando = Math.floor(Math.random() * (5 - 1) + 1);
    for(let i = 0; i < rando; ++i)
    {
        content.push(_.sample(randomSteps.given));
        content.push(_.sample(randomSteps.when));
        if(Math.floor(Math.random() * (5 - 1) + 1) % 2 == 1)
        {
            content.push(_.sample(randomSteps.and));
        }
        content.push(_.sample(randomSteps.then));
        if(Math.floor(Math.random() * (5 - 1) + 1) % 2 == 1)
        {
        content.push(_.sample(randomSteps.and)); 
        }
        if(Math.floor(Math.random() * (7 - 1) + 1) % 2 > 4)
        {
        content.push(_.sample(randomSteps.but));  
        }
    }
    return content;
}

let parseContents = (contents, stepsOnly) => {
    let strippedContents = contents.replace(/\r/g, '');
    let lines = strippedContents.split("\n");
    let repoIdRE = /@repo-(\d+)/;
    let fileIdRE = /@file-(\d+)/;
    
    let repoMatches = repoIdRE.exec(strippedContents);
    let fileMatchs = fileIdRE.exec(strippedContents);

    let repoId = (repoMatches == null)? 0 : repoMatches[1];
    if(_.findIndex(repos, (r) => r.repositoryId == repoId) == -1)
    {
        return null;
    }
    let fileId = (fileMatchs == null)? 0 : fileMatchs[1];

    let ids = {repositoryId: repoId, fileId: fileId};
    lines = lines.filter((l) => l.length > 0);
    if(!stepsOnly)
    {
        return Object.assign(ids, {numberOfLines: lines.length, fileContent: lines});
    }
    let rege = /^\s*(then|when|and|but|given)/i
    let filtered = lines.filter((l) => rege.exec(l) !== null);
    return Object.assign(ids, {numberOfLines: filtered.length, fileContent: filtered});
}

module.exports = {
    combine: combine
}