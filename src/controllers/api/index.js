const agencias = require('./agencias');
const autos = require('./autos');
const rentas = require('./rentas');
const usuarios = require('./usuarios');


module.exports = {
    ...agencias,
    ...autos,
    ...rentas,
    ...usuarios
}