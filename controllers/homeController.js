const Cat = require('../models/Cat');
const saveCat = require("../handlers/saveCat");

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
    getForm: (req, res) => {
        res.render('form');
    },
    createCat: (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    console.log(`Received form data: name - ${name}, age - ${age}`);
    
    saveCat(name, age)
        .then(() => res.render('index', { name: name, age: age }))
        .catch(() => res.send('Cat NOT SAVED'));
    }

}

module.exports = homeController;