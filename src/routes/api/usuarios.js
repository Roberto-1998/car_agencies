const router = require('express').Router();
const { obtenerUsuarios, crearUsuario, borrarUsuario, actualizarUsuario } = require('../../controllers')


router.get('/', obtenerUsuarios)

router.post('/', crearUsuario)

router.put('/:id', actualizarUsuario)

router.delete('/:id', borrarUsuario)


module.exports = router;