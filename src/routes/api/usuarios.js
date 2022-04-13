const router = require('express').Router();
const { check } = require('express-validator');
const { obtenerUsuarios, crearUsuario, borrarUsuario, actualizarUsuario } = require('../../controllers');
const { existeUsuarioPorId, existeUsuarioPorCorreo, existe, existeRolPorNombre } = require('../../helpers/api/db-models-validators');
const { validarCampos } = require('../../middlewares/validar-campos');


router.get('/', obtenerUsuarios)

router.post('/', [
    check('nombre', 'El nombre es requerido').notEmpty(),
    check('apellidos', 'Los apellidos son requeridos').notEmpty(),
    check('correo', 'El correo es requerido').notEmpty(),
    check('correo').custom(existeUsuarioPorCorreo),
    check('password', 'El password es requerido').notEmpty(),
    check('telefono', 'El telefono es requerido').notEmpty(),
    check('edad', 'La edad es requerida').notEmpty(),
    check('rol', 'El rol del usuario es requerido').notEmpty(),
    check('rol').custom(existeRolPorNombre),
    validarCampos
], crearUsuario)

router.put('/:id', [
    check('id').custom(existeUsuarioPorId),
    validarCampos
], actualizarUsuario)

router.delete('/:id', [
    check('id').custom(existeUsuarioPorId),
    validarCampos
], borrarUsuario)


module.exports = router;