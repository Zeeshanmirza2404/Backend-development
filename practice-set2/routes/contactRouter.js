const path = require('path');
const fs = require('fs');

const express = require('express');

const rootDir = require('../utils/pathUtils');

const contactRoute = express.Router();

contactRoute.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

contactRoute.post('/contact-us', (req, res, next) => {
    console.log('handling contact-us form submission', req.method, req.url, req.body);
    const formData = `Name: ${req.body.name}, Email: ${req.body.email}\n`;
    fs.appendFileSync('contact-us-data.txt', formData);
    res.send('');
});

module.exports = contactRoute;