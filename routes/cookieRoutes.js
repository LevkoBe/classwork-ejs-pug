const router = require('express').Router();
const cookieController = require('../controllers/cookieController');

router.get('/', cookieController.getIndexPage);
router.get('/set/', cookieController.setHttpCookie);
router.get('/set/form', cookieController.setFormCookie);
router.get('/get/:name', cookieController.getHttpCookie);

router.post('/', cookieController.addHttpCookie);

module.exports = router;