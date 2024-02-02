const router = require('express').Router();

const userController = require('../controllers/usersController');
router.get('/', userController.getUserListController);
router.get('/new', userController.getUserFormController);
router.get('/:id', userController.getUserByIdController);
router.get('/:id/update', userController.getUserUpdateFormController);

router.put('/:id', userController.putUserController);
router.post('/', userController.postUserController);
router.delete('/:id', userController.deleteUserController);

module.exports = router;