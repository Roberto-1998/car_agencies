require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    secretKey: process.env.CLAVE_SECRETA
}