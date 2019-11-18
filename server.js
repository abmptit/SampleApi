const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

const port = 8000;

// module variables
const config = require('./configuration/config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);
global.gConfig = finalConfig;

app.listen(port, () => {
    console.log('We are live on ' + port);
    console.log(`global.gConfig: ${process.env.NODE_ENV}`);
    console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);
});
