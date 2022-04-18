const router = require('express').Router();
const { check } = require('express-validator');
const { validarCampos, esAdminRol, nodeCache, tieneImagen } = require('../../middlewares')
const { obtenerAutos, crearAuto, borrarAuto, actualizarAuto, obtenerAutoPorId, buscarAutos, uploadImage } = require('../../controllers');
const { existeAutoPorId, existeAgenciaPorId } = require('../../helpers/api/db-models-validators');
const { validarJWT } = require('../../middlewares/validar-token');




router.get('/', [
    nodeCache(5)
], obtenerAutos)

router.get('/:id', [
    check('id').custom(existeAutoPorId),
    validarCampos,
    nodeCache(5)
], obtenerAutoPorId)

router.get('/search/:marca', [
    nodeCache(5)
], buscarAutos);

router.post('/', [
    validarJWT,
    esAdminRol,
    check('marca', 'La marca es requerida').notEmpty(),
    check('modelo', 'El modelo es requerido').notEmpty(),
    check('km', 'Los kilometros son requeridos').notEmpty(),
    check('plazas', 'El dato de plazas es requerido').notEmpty(),
    check('combustible', 'El tipo de combustible es requerido').notEmpty(),
    check('precio', 'El precio de alquiler es requerido').notEmpty(),
    check('year', 'El año del auto es requerido').notEmpty(),
    check('agenciaId', 'La agencia a la que pertenece el auto es requerida').notEmpty(),
    check('agenciaId').custom(existeAgenciaPorId),
    validarCampos
], crearAuto);

router.put('/image/:id', [
    validarJWT,
    esAdminRol,
    tieneImagen,
    validarCampos
], uploadImage);

router.put('/:id', [
    validarJWT,
    esAdminRol,
    check('id').custom(existeAutoPorId),
    validarCampos
], actualizarAuto)

router.delete('/:id', [
    validarJWT,
    esAdminRol,
    check('id').custom(existeAutoPorId),
    validarCampos
], borrarAuto)




module.exports = router;