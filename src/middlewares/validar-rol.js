const { request, response } = require("express");
const createError = require('http-errors');
const _usuario = require('../services');


const esAdminRol = async(req = request, res = response, next) => {

    const { usuarioId } = req;

    try {

        const usuario = await _usuario.obtenerUsuarioPorId(usuarioId);
        if (usuario.rol !== 'admin_rol') {
            next(createError(400, req.t('middleware.esAdminRol_error')))
        }
        next();

    } catch (e) {
        next(e)
    }

}

module.exports = {
    esAdminRol
}