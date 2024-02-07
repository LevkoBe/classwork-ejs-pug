const Cat = require('../models/Cat');

const homeController = {
    getHomePage: (req, res) => {
        res.render('home');
    }
}

module.exports = homeController;
