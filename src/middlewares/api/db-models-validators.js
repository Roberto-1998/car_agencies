const { request, response } = require('express');
const _renta = require('../../services');
const createError = require('http-errors');

const validarRentaAutoUsuario = async(req, res, next) => {

    const { usuarioId, autoId } = req.body;

    try {
        const renta = await _renta.verificarUnicaRenta(usuarioId, autoId);
        if (renta) {
            next(createError(400, `El usuario ${usuarioId} ya tiene asignada una renta para el auto ${autoId}`))
        }

    } catch (e) {
        next(e)
    }
}

module.exports = {
    validarRentaAutoUsuario
}