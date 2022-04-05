const router = require('express').Router();
const { obtenerRentas, crearRenta, borrarRenta, actualizarRenta } = require('../../controllers')



router.get('/', obtenerRentas)

router.post('/', crearRenta)

router.put('/:id', actualizarRenta)

router.delete('/:id', borrarRenta)


module.exports = router;