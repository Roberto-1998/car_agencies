const { request, response } = require("express");
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config')

const validarJWT = async(req = request, res = response, next) => {

    const token = req.header('x-token');
    if (!token) {
        return next(createError(400, req.t('middleware.validarJWT_noToken_error')))
    }

    try {
        const { usuarioId } = jwt.verify(token, secretKey);
        req.usuarioId = usuarioId

    } catch (error) {
        console.log(error);
        next(createError(400, req.t('middleware.validarJWT_tokenIncorrecto_error')))
    }
    next();
}


module.exports = {
    validarJWT
}