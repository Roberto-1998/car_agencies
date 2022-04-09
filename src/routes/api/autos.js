const router = require('express').Router();
const { obtenerAutos, crearAuto, borrarAuto, actualizarAuto, obtenerAutoPorId, buscarAutos } = require('../../controllers')



router.get('/', obtenerAutos)

router.get('/:id', obtenerAutoPorId)

router.get('/search/:marca', buscarAutos);

router.post('/', crearAuto)

router.put('/:id', actualizarAuto)

router.delete('/:id', borrarAuto)




module.exports = router;