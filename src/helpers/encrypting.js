const bcrypt = require('bcryptjs')

const encrypt = (key) => {
    try {
        return bcrypt.hashSync(key)
    } catch (error) {
        throw ("Error Encrypting")  
    };
};

const decrypt = (key, encryptKey) => {
    try {
        const test =  bcrypt.compareSync(key, encryptKey)
        return test
    } catch (error) {
        throw ("Error Decrypting")    
    };
};

module.exports = { encrypt, decrypt };