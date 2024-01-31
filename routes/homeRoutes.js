const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getListOfCats);
router.get('/home', homeController.getHomePage);
router.get('/info', homeController.getInfoPage);
router.get('/:id', homeController.getByID);
router.get('/delete/:id', homeController.delWithID);

module.exports = router;