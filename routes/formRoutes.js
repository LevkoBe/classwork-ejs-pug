const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', formController.getForm); // Q-question: is this "/form", or just "/"
router.get('/form', formController.getForm); // Q-question: is this "/form", or just "/"
router.post('/cat', formController.createCat); // Q-question: is this "/form/post", or just "/post"

module.exports = router;
