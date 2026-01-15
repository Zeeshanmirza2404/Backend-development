const express = require('express');
const hostController = require('../controllers/hostController');

const hostRouter = express.Router();

// Host routes
hostRouter.get('/addhome', hostController.getAddHome);
hostRouter.post('/addhome', hostController.postAddHome);
hostRouter.get('/homes', hostController.getHostHomeList);
hostRouter.get('/edit/:id', hostController.getEditHome);
hostRouter.post('/edit/:id', hostController.postEditHome);
hostRouter.get('/delete/:id', hostController.deleteHome);

module.exports = hostRouter;
