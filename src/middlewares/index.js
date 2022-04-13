const api = require('./api');
const validarCampos = require('./validar-campos');
const validarJWT = require('./validar-token');
const validarRol = require('./validar-rol');



module.exports = {
    ...api,
    ...validarCampos,
    ...validarJWT,
    ...validarRol
}