const { request, response } = require("express");
const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const _usuario = require('../../services');

const login = async(req = request, res = response, next) => {

    const { correo, password } = req.body;

    try {
        const usuario = await _usuario.obtenerUsuarioPorCorreo(correo);
        if (usuario) {
            const iguales = bcrypt.compareSync(password, usuario.password);
            if (iguales) {
                return res.json({
                    message: 'Usuario Logueado'
                })
            } else {
                return next(createError(400, "Error usuario-password"))
            }

        } else {
            next(createError(400, "Error usuario-password"))
        }

    } catch (error) {
        console.log(error);
        next(createError(500, "Error al realizar el Login"))

    }

}

module.exports = {
    login
}