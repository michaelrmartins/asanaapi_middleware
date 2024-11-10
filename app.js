// App Core File Configuration

const express = require('express')
const app = express();
const routes = require('./routes')
const path = require ('path')

// Enables App top understand Json requests
app.use(express.json());

// Map Assets to use by client
app.use('/assets', express.static(path.join(__dirname, 'views', 'assets')))
app.use(routes)

module.exports = app;