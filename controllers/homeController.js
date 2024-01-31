const Cat = require('../models/Cat');

const homeController = {
    getHomePage: (req, res) => {
        res.render('index');
    },
    getInfoPage: (req, res) => {
        res.send('getInfoPage sent');
    },
    getListOfCats: async (req, res) => {
        try {
            const allCats = await Cat.find();
            res.render('list', { title: 'All cats', items: allCats });
        } catch (error) {
            console.error('Error fetching cats:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = homeController;