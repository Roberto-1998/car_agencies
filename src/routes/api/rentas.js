const router = require('express').Router();
const { check } = require('express-validator');
const { validarCampos, esAdminRol, nodeCache } = require('../../middlewares');
const { existeAutoPorId, existeRentaPorUuid, verificarAutoDisponible } = require('../../helpers');
const { obtenerRentas, crearRenta, borrarRenta, actualizarRenta } = require('../../controllers');
const { validarJWT } = require('../../middlewares');



router.get('/', [
    validarJWT,
    nodeCache(5),
    validarCampos
], obtenerRentas)

router.post('/', [
    validarJWT,
    check('autoId', 'routes.renta.check_autoId_requerido').notEmpty(),
    check('autoId').custom(existeAutoPorId),
    check('fechaInicio', 'routes.renta.check_fechaInicio_requerida').notEmpty(),
    check('fechaFinal', 'routes.renta.check_fechaFinal_requerida').notEmpty(),
    check('autoId').custom(verificarAutoDisponible),
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