const { request, response } = require('express');
const createError = require('http-errors');


const tieneImagen = (req = request, res = response, next) => {

    if (!req.file) {
        return next(createError(400, "middleware.tieneImagen_error"))
    }

    next();

}



module.exports = {
    tieneImagen
}