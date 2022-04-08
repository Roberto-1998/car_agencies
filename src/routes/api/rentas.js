const router = require('express').Router();
const { obtenerRentas, crearRenta, borrarRenta, actualizarRenta } = require('../../controllers')



router.get('/', obtenerRentas)

router.post('/', crearRenta)

router.put('/:uuid', actualizarRenta)

router.delete('/:uuid', borrarRenta)


module.exports = router;