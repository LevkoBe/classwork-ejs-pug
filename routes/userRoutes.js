const router = require('express').Router();
const userController = require('../controllers/usersController');

// http://127.0.0.1:3400/users/
router.get('/', userController.getUserListController);
// http://127.0.0.1:3400/users/new
router.get('/new', userController.getUserFormController);
// http://127.0.0.1:3400/users/65ca0f14ebaa3c91fd56893d
// http://127.0.0.1:3400/users/65ca0f14ebaa3c91fd56893ds
router.get('/:id', userController.getUserByIdController);
// http://127.0.0.1:3400/users/65ca0f14ebaa3c91fd56893d
// body: {"name": "Jacks", "lastname": "Blacks", "email": "white@black.com", "password": "jackblacks"}
router.put('/:id', userController.putUserController);
router.patch('/:id', userController.patchUserController);
// http://127.0.0.1:3400/users/65ca0f14ebaa3c91fd56893d/update
router.get('/:id/update', userController.getUserUpdateFormController);
// http://127.0.0.1:3400/users/
// body: {"name": "Jacks", "lastname": "Blacks", "email": "white@black.com", "password": "jackblacks"}
router.post('/', userController.postUserController);
// http://127.0.0.1:3400/users/65ca0f14ebaa3c91fd56893d
router.delete('/:id', userController.deleteUserController);

module.exports = router;