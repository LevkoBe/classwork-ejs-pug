const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getListOfCats);
router.get('/home', homeController.getHomePage);
router.get('/info', homeController.getInfoPage);
router.post('/post', homeController.createCat); // Q-question: is this "/form/post", or just "/post"

module.exports = router;