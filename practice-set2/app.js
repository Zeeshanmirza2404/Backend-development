const path = require('path');
const express = require('express');

const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');
const rootDir = require('./utils/pathUtils');

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);

app.use('/', (req, res, next) => {
    console.log('handling 404', req.method, req.url);
    res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is port on address http://localhost:${PORT}`); 
});