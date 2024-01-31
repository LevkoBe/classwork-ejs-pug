const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getForm); // Q-question: is this "/form", or just "/"
router.get('/form', homeController.getForm); // Q-question: is this "/form", or just "/"
router.post('/post', homeController.createCat); // Q-question: is this "/form/post", or just "/post"

module.exports = router;
