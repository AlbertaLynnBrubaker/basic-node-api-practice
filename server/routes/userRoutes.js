const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/', userController.user_index)
router.post('/', userController.user_create_user)
router.get('/:id', userController.user_details)
router.patch('/:id', userController.user_update)
router.delete('/:id', userController.user_delete)

module.exports = router