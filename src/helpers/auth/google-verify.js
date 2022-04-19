const { OAuth2Client } = require('google-auth-library');
const { googleClientId } = require('../../config')


const client = new OAuth2Client(googleClientId);


const googleVerify = async(idToken = '') => {

    const ticket = await client.verifyIdToken({
        idToken,
        audience: googleClientId,
    });

    const { given_name: nombre, family_name: apellidos, email: correo, } = ticket.getPayload();

    return { nombre, apellidos, correo };

}

module.exports = {
    googleVerify
}