const { request, response } = require('express');
const _renta = require('../../services');
const createError = require('http-errors');


const validarRentaAutoUsuario = async(req, res, next) => {

    const { usuarioId, autoId } = req.body;

    try {
        const renta = await _renta.verificarUnicaRenta(usuarioId, autoId);
        if (renta) {
            next(createError(400, req.t('middleware.validar_renta_auto_usuario_error')))
        }
        next();

    } catch (e) {
        next(e)
    }
}


const tieneImagen = (req = request, res = response, next) => {

    if (!req.file) {
        return next(createError(400, "middleware.tieneImagen_error"))
    }

    next();

}



module.exports = {
    validarRentaAutoUsuario,
    tieneImagen
}