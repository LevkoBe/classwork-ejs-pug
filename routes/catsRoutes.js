const router = require('express').Router();
const catsController = require('../controllers/catsController');

router.get('/', catsController.getListOfCats);
router.get('/info', catsController.getInfoPage);
router.get('/delete/:id', catsController.delWithID);
router.get('/:id', catsController.getByID);

module.exports = router;