const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const saveCat = require("../handles/saveCat");

router.get('/', homeController.getHomePage);
// router.get('/info', homeController.getInfoPage);
router.post('/post', (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    saveCat(name, age);
    // next();
// }, (req, res) => {
    
    res.send(`Received form data: name - ${name}, age - ${age}`);
})

module.exports = router;