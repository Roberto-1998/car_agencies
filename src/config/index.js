require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    secretKey: process.env.CLAVE_SECRETA,
    googleClientId: process.env.GOOGLE_CLIENT_ID
}