const router = require('express').Router();
const headersController = require('../controllers/headersControllers');

// http://127.0.0.1:3400/headers/set?one=uno
// http://127.0.0.1:3400/headers/set
router.get('/set/', headersController.setHeader);
// http://127.0.0.1:3400/headers/get/host
// http://127.0.0.1:3400/headers/get/tost
router.get('/get/:name', headersController.getHeader);

module.exports = router;