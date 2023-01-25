const express = require('express')
const router = express.Router()

const { sessionCheck } = require('../controllers/sessionControllers')
const { checkRequest } = require('../middlewares/checkRequest')

router.post('', checkRequest, sessionCheck);

module.exports = router;