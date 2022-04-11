const api = require('./api');
const validarCampos = require('./validar-campos');


module.exports = {
    ...api,
    ...validarCampos
}