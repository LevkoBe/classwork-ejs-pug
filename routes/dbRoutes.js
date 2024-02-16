const router = require('express').Router();
const dbController = require('../controllers/dbController');

// http://127.0.0.1:3400/db/
router.get('/', dbController.getDB);
// http://127.0.0.1:3400/db/add
router.get('/add', dbController.addDBrecords);
// // http://127.0.0.1:3400/db/65ca0f14ebaa3c91fd56893d
// // http://127.0.0.1:3400/db/65ca0f14ebaa3c91fd56893ds
// router.get('/:id', dbController.getUserByIdController);
// // http://127.0.0.1:3400/db/65ca0f14ebaa3c91fd56893d
// // body: {"name": "Jacks", "lastname": "Blacks", "email": "white@black.com", "password": "jackblacks"}
// router.put('/:id', dbController.putUserController);
// router.patch('/:id', dbController.patchUserController);
// // http://127.0.0.1:3400/db/65ca0f14ebaa3c91fd56893d/update
// router.get('/:id/update', userController.getUserUpdateFormController);
// // http://127.0.0.1:3400/db/
// // body: {"name": "Jacks", "lastname": "Blacks", "email": "white@black.com", "password": "jackblacks"}
// router.post('/', dbController.postUserController);
// // http://127.0.0.1:3400/db/65ca0f14ebaa3c91fd56893d
// router.delete('/:id', dbController.deletedbController);

module.exports = router;