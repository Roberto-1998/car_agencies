const router = require('express').Router();
const { check } = require('express-validator');
const { obtenerUsuarios, crearUsuario, borrarUsuario, actualizarUsuario } = require('../../controllers');
const { existeUsuarioPorId, existeUsuarioPorCorreo, existe, existeRolPorNombre } = require('../../helpers');
const { esAdminRol, nodeCache } = require('../../middlewares');
const { validarCampos } = require('../../middlewares');
const { validarJWT } = require('../../middlewares');


router.get('/', [

    nodeCache(5)
], obtenerUsuarios)

router.post('/', [


    check('nombre', 'routes.usuario.check_nombre_requerido').notEmpty(),
    check('apellidos', 'routes.usuario.check_apellidos_requeridos').notEmpty(),
    check('correo', 'routes.usuario.check_correo_requerido').notEmpty(),
    check('correo').custom(existeUsuarioPorCorreo),
    check('password', 'routes.usuario.check_password_requerido').notEmpty(),
    check('telefono', 'routes.usuario.check_telefono_requerido').notEmpty(),
    check('edad', 'routes.usuario.check_edad_requerido').notEmpty(),
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