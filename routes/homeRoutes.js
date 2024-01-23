const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);
// router.get('/info', homeController.getInfoPage);
router.post('/post', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send(`Received form data:\nUsername - ${username}, Password - ${password}`);
})

module.exports = router;