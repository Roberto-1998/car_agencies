const router = require('express').Router();
const { check } = require('express-validator');
const { obtenerAgencias, crearAgencia, actualizarAgencia, borrarAgencia } = require('../../controllers');
const { existeAgenciaPorId } = require('../../helpers');
const { validarCampos } = require('../../middlewares')



router.get('/', obtenerAgencias)

router.post('/', [
    check('nombre', 'El nombre de la agencia es requerido').notEmpty(),
    check('telefono', 'El telefono de la agencia es requerido').notEmpty(),
    check('direccion', 'La direccion de la agencia es requerido').notEmpty(),
    validarCampos
], crearAgencia)

router.put('/:id', [
    check('id').custom(existeAgenciaPorId),
    validarCampos
], actualizarAgencia)

router.delete('/:id', [
    check('id').custom(existeAgenciaPorId),
    validarCampos
], borrarAgencia)


module.exports = router;