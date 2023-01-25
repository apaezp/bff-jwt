const express = require('express')
const router = express.Router()

const { createUsers, getUsers } = require('../controllers/usersControllers')
const { checkRequest } = require('../middlewares/checkRequest')
const { jwtValidation } = require('../middlewares/jwt')

router.post('/usuarios', checkRequest, createUsers);
router.get('/usuarios', checkRequest, jwtValidation ,getUsers);

module.exports = router;