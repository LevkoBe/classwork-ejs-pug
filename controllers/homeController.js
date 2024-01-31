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
    },
    getByID: async (req, res) => {
        const catId = req.params.id;

        try {
            const theCat = await Cat.findById(catId);

            if (!theCat) {
                return res.status(404).send('Cat not found');
            }

            res.render('catDetails', { cat: theCat });
        } catch (error) {
            console.error('Error fetching cat by ID:', error);
            res.status(500).send('Try and enter another id');
        }
    }
}

module.exports = homeController;
