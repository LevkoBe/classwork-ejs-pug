const router = require('express').Router();
const redireController = require('../controllers/redireController');

router.get('/', redireController.getFromDjango);
router.get('/post', redireController.postOnDjango);
router.get('/express', redireController.getFromExress);
router.post('/express', redireController.postOnExress);

module.exports = router;