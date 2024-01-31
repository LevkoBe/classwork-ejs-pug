const Cat = require('../models/Cat');
const saveCat = require("../handlers/saveCat");

const formController = {
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

module.exports = formController;