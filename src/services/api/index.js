const agenciasService = require('./agencias');
const autosService = require('./autos');
const rentasService = require('./rentas');
const usuariosService = require('./usuarios');
const rolesService = require('./rol');

module.exports = {
    ...agenciasService,
    ...autosService,
    ...rentasService,
    ...usuariosService,
    ...rolesService
}