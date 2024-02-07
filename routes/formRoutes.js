const router = require('express').Router();
const formController = require('../controllers/formController');

router.get('/', formController.getForm);
router.get('/form', formController.getForm);
router.post('/cat', formController.createCat);

module.exports = router;
