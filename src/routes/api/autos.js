const router = require('express').Router();
const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares')
const { obtenerAutos, crearAuto, borrarAuto, actualizarAuto, obtenerAutoPorId, buscarAutos, uploadImage } = require('../../controllers');
const { existeAutoPorId } = require('../../helpers/api/db-models-validators');



router.get('/', obtenerAutos)

router.get('/:id', [
    check('id').custom(existeAutoPorId),
    validarCampos
], obtenerAutoPorId)

router.get('/search/:marca', buscarAutos);

router.post('/', [
    check('marca', 'La marca es requerida').notEmpty(),
    check('modelo', 'El modelo es requerido').notEmpty(),
    check('km', 'Los kilometros son requeridos').notEmpty(),
    check('plazas', 'El dato de plazas es requerido').notEmpty(),
    check('combustible', 'El tipo de combustible es requerido').notEmpty(),
    check('precio', 'El precio de alquiler es requerido').notEmpty(),
    check('year', 'El año del auto es requerido').notEmpty(),
    check('agenciaId', 'La agencia a la que pertenece el auto es requerida').notEmpty(),
    validarCampos
], crearAuto);

router.put('/image/:id', [
    check('imagen', 'La imagen es requerida').notEmpty(),
    check('id').custom(existeAutoPorId),
    validarCampos
], uploadImage);

router.put('/:id', [
    check('id').custom(existeAutoPorId),
    validarCampos
], actualizarAuto)

router.delete('/:id', [
    check('id').custom(existeAutoPorId),
    validarCampos
], borrarAuto)




module.exports = router;