/*
*   Author Skullyfox <Skullyfox.yt@gmail.com>
*/

/*  =============================================================================
    Dependencies
    ============================================================================= */

const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');

/*  =============================================================================
    Init Express App
    ============================================================================= */

const app = express();
const http = require('http').Server(app);

/*  =============================================================================
    App Config
    ============================================================================= */

app.disable('x-powered-by');
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*  =============================================================================
    Routes config
    ============================================================================= */
require('./src/server/routes')(app);

module.exports = http;
