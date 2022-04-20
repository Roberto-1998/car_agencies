const router = require('express').Router();
const { check } = require('express-validator');
const { obtenerAgencias, crearAgencia, actualizarAgencia, borrarAgencia } = require('../../controllers');
const { existeAgenciaPorId } = require('../../helpers');
const { validarCampos, esAdminRol, validarJWT, nodeCache } = require('../../middlewares');




router.get('/', [
    validarJWT,
    nodeCache(5)
], obtenerAgencias)

router.post('/', [
    validarJWT,
    esAdminRol,
    check('nombre', 'routes.agencia.check_nombre_requerido').notEmpty(),
    check('telefono', 'routes.agencia.check_telefono_requerido').notEmpty(),
    check('direccion', 'routes.agencia.check_direccion_requerida').notEmpty(),
    validarCampos
], crearAgencia)

router.put('/:id', [
    validarJWT,
    esAdminRol,
    check('id').custom(existeAgenciaPorId),
    validarCampos
], actualizarAgencia)

router.delete('/:id', [
    validarJWT,
    esAdminRol,
    check('id').custom(existeAgenciaPorId),
    validarCampos
], borrarAgencia)


module.exports = router;