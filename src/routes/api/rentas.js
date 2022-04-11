const router = require('express').Router();
const { check } = require('express-validator');
const { validarCampos, validarRentaAutoUsuario } = require('../../middlewares');
const { existeAutoPorId, existeUsuarioPorId, existeRentaPorUuid } = require('../../helpers');
const { obtenerRentas, crearRenta, borrarRenta, actualizarRenta } = require('../../controllers')



router.get('/', obtenerRentas)

router.post('/', [
    check('autoId', 'El auto rentado es requerido').notEmpty(),
    check('usuarioId', 'El usuario que ha rentado el auto es requerido').notEmpty(),
    check('autoId').custom(existeAutoPorId),
    check('usuarioId').custom(existeUsuarioPorId),
    check('fechaInicio', 'La fecha inicial del alquiler es requerida').notEmpty(),
    check('fechaFinal', 'La fecha final del alquiler es requerida').notEmpty(),
    check('usuarioId', 'El usuario que ha rentado el auto es requerido').notEmpty(),
    validarRentaAutoUsuario,
    validarCampos
], crearRenta)

router.put('/:uuid', [
    check('uuid').custom(existeRentaPorUuid),
    validarCampos
], actualizarRenta)

router.delete('/:uuid', [
    check('uuid').custom(existeRentaPorUuid),
    validarCampos
], borrarRenta)


module.exports = router;