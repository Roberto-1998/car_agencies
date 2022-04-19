const jwt = require('jsonwebtoken');
const { secretKey } = require('../../config')


const generarJWT = (payload) => {

    return new Promise((resolve, reject) => {

        jwt.sign(payload, secretKey, { expiresIn: '1h' }, (err, token) => {
            if (err) {
                console.log(err);
                reject('helper.generarJWT_error')
            } else(
                resolve(token)
            )
        })

    })
}




module.exports = {
    generarJWT,

}