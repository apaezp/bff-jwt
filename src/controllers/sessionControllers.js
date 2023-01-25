const { decrypt } = require("../helpers/encrypting")
const { jwtSign } = require("../middlewares/jwt")
const { getUserKey } = require("../models/usersModels")

const sessionCheck = async (req, res) => {
    const { email, password } = req.body
    email.toLowerCase()
    password.toLowerCase()
    try {
        const user = await getUserKey(email)
        if (user === undefined) {
            res.status(500).send("Error User Not Found")
        } else {
            const decryptKey = decrypt(password, user.password)
            if (decryptKey === false) {
                res.status(500).send("Error Token decrypt")
            } else {
                const tokenJwt = await jwtSign({ email })
                res.status(200).send(tokenJwt)
            }
        }
    } catch (error) {
        res.status(error.code || 500).send(error)
    };
};
module.exports = { sessionCheck };

