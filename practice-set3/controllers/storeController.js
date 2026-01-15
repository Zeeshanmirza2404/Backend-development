const Home = require('../models/home');

// Get all homes for store
exports.getAllHomes = (req, res) => {
    const homes = Home.getAllHomes();
    res.render('store/home', { homes });
};

// Get home details
exports.getHomeDetail = (req, res) => {
    const homeId = req.params.id;
    const home = Home.getHomeById(homeId);
    
    if (!home) {
        return res.status(404).render('404');
    }
    
    res.render('store/home-detail', { home });
};

// Get booking page
exports.getBooking = (req, res) => {
    const homeId = req.params.id;
    const home = Home.getHomeById(homeId);
    
    if (!home) {
        return res.status(404).render('404');
    }
    
    res.render('store/booking', { home });
};

// Get favourite list
exports.getFavouriteList = (req, res) => {
    const homes = Home.getAllHomes();
    res.render('store/favourite-list', { homes });
};

// Post booking confirmation
exports.postBooking = (req, res) => {
    const homeId = req.params.id;
    const home = Home.getHomeById(homeId);
    
    if (!home) {
        return res.status(404).render('404');
    }
    
    const { fullname, email, phone, checkin, checkout, guests, requests } = req.body;
    
    // Create booking object with unique ID
    const booking = {
        id: 'BK' + Date.now(),
        homeId: homeId,
        housename: home.housename,
        fullname,
        email,
        phone,
        checkin,
        checkout,
        guests,
        requests,
        bookingDate: new Date().toISOString()
    };
    
    // Here you can save booking to file or database if needed
    // For now, we'll just pass it to the success page
    
    res.render('store/booking-success', { booking });
};
