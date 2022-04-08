const router = require('express').Router();
const { obtenerAutos, crearAuto, borrarAuto, actualizarAuto, obtenerAutoPorId } = require('../../controllers')



router.get('/', obtenerAutos)

router.get('/:id', obtenerAutoPorId)

router.post('/', crearAuto)

router.put('/:id', actualizarAuto)

router.delete('/:id', borrarAuto)


module.exports = router;