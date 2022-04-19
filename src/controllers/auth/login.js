const { request, response } = require("express");
const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const _usuario = require('../../services');
const { generarJWT } = require("../../helpers");

const login = async(req = request, res = response, next) => {

    const { correo, password } = req.body;

    try {
        const usuario = await _usuario.obtenerUsuarioPorCorreo(correo);
        if (usuario) {
            const iguales = bcrypt.compareSync(password, usuario.password);
            if (iguales) {
                try {
                    // Generar JWT
                    const payload = { usuarioId: usuario.id }
                    const token = await generarJWT(payload);

                    res.json({
                        token
                    })

                } catch (e) {
                    next(e)
                }

            } else {
                return next(createError(400, "helper.login_error_400"))
            }

        } else {
            next(createError(400, "helper.login_error_400"))
        }

    } catch (error) {
        console.log(error);
        next(createError(500, 'helper.login_error_500'))

    }

}

module.exports = {
    login
}