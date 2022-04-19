const { request, response } = require("express");
const createError = require('http-errors');
const { googleVerify, generarJWT } = require("../../helpers");
const _usuario = require('../../services')


const googleSignin = async(req = request, res = response, next) => {

    const { id_token } = req.body;

    try {

        const { correo, nombre, apellidos } = await googleVerify(id_token);

        const existeUsuario = await _usuario.obtenerUsuarioPorCorreo(correo);
        if (existeUsuario) {
            return next(createError(400, "helper.existeUsuarioPorCorreo_error"))
        }

        const data = {
            nombre,
            apellidos,
            correo,
            password: 'google',
            google: true
        }

        try {
            const usuario = await _usuario.crearUsuario(data);
            // Generar el JWT
            const payload = { usuarioId: usuario.id }
            const token = await generarJWT(payload);

            res.json({
                usuario,
                token
            })

        } catch (e) {
            next(e)

        }

    } catch (e) {
        next(createError(400, "Token de Google no es valido"))
    }

}


module.exports = {
    googleSignin
}