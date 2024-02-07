const router = require('express').Router();
const cookieController = require('../controllers/cookieController');

router.get('/', cookieController.getIndexPage);
router.get('/set/form', cookieController.setFormCookie);
router.get('/set/:name', cookieController.setHttpCookie);
router.get('/get/:name', cookieController.getHttpCookie);

router.post('/', cookieController.addHttpCookie);

module.exports = router;