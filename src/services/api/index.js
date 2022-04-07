const agenciasService = require('./agencias');
const autosService = require('./autos');
const rentasService = require('./rentas');
const usuariosService = require('./usuarios');

module.exports = {
    ...agenciasService,
    ...autosService,
    ...rentasService,
    ...usuariosService
}