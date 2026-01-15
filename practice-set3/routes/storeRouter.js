const express = require('express');
const storeController = require('../controllers/storeController');

const storeRouter = express.Router();

// Store routes
storeRouter.get('/', storeController.getAllHomes);
storeRouter.get('/home/:id', storeController.getHomeDetail);
storeRouter.get('/booking/:id', storeController.getBooking);
storeRouter.post('/booking/:id', storeController.postBooking);
storeRouter.get('/favourites', storeController.getFavouriteList);

module.exports = storeRouter;
