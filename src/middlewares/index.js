const api = require('./api');
const validarCampos = require('./validar-campos');
const validarJWT = require('./validar-token');
const validarRol = require('./validar-rol');
const nodeCache = require('./node-cache');




module.exports = {
    ...api,
    ...validarCampos,
    ...validarJWT,
    ...validarRol,
    ...nodeCache
}