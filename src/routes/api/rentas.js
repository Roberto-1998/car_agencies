const router = require('express').Router();
const { check } = require('express-validator');
const { validarCampos, validarRentaAutoUsuario, esAdminRol, nodeCache } = require('../../middlewares');
const { existeAutoPorId, existeRentaPorUuid, verificarAutoDisponible } = require('../../helpers');
const { obtenerRentas, crearRenta, borrarRenta, actualizarRenta } = require('../../controllers');
const { validarJWT } = require('../../middlewares/validar-token');



router.get('/', [
    nodeCache(300)
], obtenerRentas)

router.post('/', [
    validarJWT,
    esAdminRol,
    check('autoId', 'El auto rentado es requerido').notEmpty(),
    check('autoId').custom(existeAutoPorId),
    check('fechaInicio', 'La fecha inicial del alquiler es requerida').notEmpty(),
    check('fechaFinal', 'La fecha final del alquiler es requerida').notEmpty(),
    check('autoId').custom(verificarAutoDisponible),
    validarRentaAutoUsuario,
    validarCampos
], crearRenta)

router.put('/:uuid', [
    validarJWT,
    esAdminRol,
    check('uuid').custom(existeRentaPorUuid),
    validarCampos
], actualizarRenta)

router.delete('/:uuid', [
    validarJWT,
    esAdminRol,
    check('uuid').custom(existeRentaPorUuid),
    validarCampos
], borrarRenta)


module.exports = router;