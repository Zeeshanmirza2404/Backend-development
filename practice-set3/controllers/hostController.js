const Home = require('../models/home');

// Get add home form
exports.getAddHome = (req, res) => {
    res.render('host/addhome');
};

// Post new home
exports.postAddHome = (req, res) => {
    const { housename, location, photo, price, rating } = req.body;

    // Validate required fields
    if (!housename || !location || !photo || !price || !rating) {
        console.error('Missing required fields:', req.body);
        return res.status(400).send('Missing required fields');
    }

    // Add home to model
    const newHome = Home.addHome(housename, location, photo, price, rating);
    console.log('Adding new home:', newHome);

    res.render('host/homeadded', { home: newHome });
};

// Get host home list
exports.getHostHomeList = (req, res) => {
    const homes = Home.getAllHomes();
    res.render('host/host-home-list', { homes });
};

// Get edit home form
exports.getEditHome = (req, res) => {
    const homeId = req.params.id;
    const home = Home.getHomeById(homeId);

    if (!home) {
        return res.status(404).render('404');
    }

    res.render('host/edit-home', { home });
};

// Post edit home
exports.postEditHome = (req, res) => {
    const homeId = req.params.id;
    const { housename, location, photo, price, rating } = req.body;

    // Validate required fields
    if (!housename || !location || !photo || !price || !rating) {
        console.error('Missing required fields:', req.body);
        return res.status(400).send('Missing required fields');
    }

    // Update home in model
    const updatedHome = Home.updateHome(homeId, housename, location, photo, price, rating);
    console.log('Updated home:', updatedHome);

    res.redirect('/host/homes');
};

// Delete home
exports.deleteHome = (req, res) => {
    const homeId = req.params.id;
    Home.deleteHome(homeId);
    console.log('Deleted home with id:', homeId);
    res.redirect('/host/homes');
};
