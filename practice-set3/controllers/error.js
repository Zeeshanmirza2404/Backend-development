exports.get404 = (req, res) => {
    res.status(404).render('404');
};

exports.get500 = (err, req, res, next) => {
    console.error(err);
    res.status(500).render('error', { error: err.message });
};
