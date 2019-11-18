const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

const port = 8000;

// module variables
const defaultConfig = require('./configuration/config.json');
//const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
// const environmentConfig = config[environment];
const environmentConfig = require(`./configuration/config.${environment}.json`);
const finalConfig = _.merge(defaultConfig, environmentConfig);
global.gConfig = finalConfig;

app.listen(port, () => {
    console.log('We are live on ' + port);
    console.log(`global.gConfig: ${process.env.NODE_ENV}`);
    console.log(`final Config: ${JSON.stringify(finalConfig)}`);
    // console.log(`global.gConfig: ${JSON.stringify(config)}`);
});
