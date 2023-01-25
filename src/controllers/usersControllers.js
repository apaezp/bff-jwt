const { encrypt } = require('../helpers/encrypting')
const { jwtDecode } = require('../middlewares/jwt')
const { createUser, getUser } = require('../models/usersModels')

const createUsers = async (req, res) => {
    try {
        const payload = req.body
        const passwordEncrypt = encrypt(req.body.password)
        const payloadEncrypt = { ...payload, ... { password: passwordEncrypt } }
        result = await createUser(payloadEncrypt)
        res.status(200).send(result)
    } catch (error) {
        res.status(error.code || 500).send(error)
    };
};

const getUsers = async (req, res) => {
    try {
        const tokenJWT = req.header("Authorization")
        const token = jwtDecode(tokenJWT)
        const { email } = token
        result = await getUser(email)
        res.send(result)
    } catch (error) {
        res.status(error.code || 500).send(error)
    };
};

module.exports = { createUsers, getUsers };