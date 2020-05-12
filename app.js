"use strict";

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./src/routes');

const app = express();

app.use(bodyParser.urlencoded({
  limit: '10mb',
  extended: true
}));

app.use(bodyParser.json({
  limit: '10mb',
  extended: true
}));

// API routes
app.use(router());

module.exports = app;
