const router = require('express').Router();
const { obtenerAgencias, crearAgencia, actualizarAgencia, borrarAgencia } = require('../../controllers');



router.get('/', obtenerAgencias)

router.post('/', crearAgencia)

router.put('/:id', actualizarAgencia)

router.delete('/:id', borrarAgencia)


module.exports = router;