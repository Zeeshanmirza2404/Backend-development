const path = require('path');
const express = require('express');

const storeRouter = require('./routes/storeRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use(express.urlencoded());

// Root route - redirect to store
app.get('/', (req, res) => {
    res.redirect('/store');
});

// Store routes (buyer/customer)
app.use('/store', storeRouter);

// Host routes (seller/property owner)
app.use('/host', hostRouter);

// 404 handler
app.use('/', (req, res, next) => {
    res.render('404');
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is port on address http://localhost:${PORT}`); 
});