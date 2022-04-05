const router = require('express').Router();
const { obtenerAutos, obtenerAuto, crearAuto, borrarAuto, actualizarAuto } = require('../../controllers')



router.get('/', obtenerAutos)

router.get('/:id', obtenerAuto)

router.post('/', crearAuto)

router.put('/:id', actualizarAuto)

router.delete('/:id', borrarAuto)


module.exports = router;