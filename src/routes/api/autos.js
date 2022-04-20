const router = require('express').Router();
const { check } = require('express-validator');
const { validarCampos, esAdminRol, nodeCache, tieneImagen } = require('../../middlewares')
const { obtenerAutos, crearAuto, borrarAuto, actualizarAuto, obtenerAutoPorId, buscarAutos, uploadImage } = require('../../controllers');
const { existeAutoPorId, existeAgenciaPorId } = require('../../helpers');
const { validarJWT } = require('../../middlewares');




router.get('/', [
    /*  validarJWT, */
    nodeCache(5),
    validarCampos,
], obtenerAutos)

router.get('/:id', [
    /*  validarJWT, */
    check('id').custom(existeAutoPorId),
    validarCampos,
    nodeCache(5)
], obtenerAutoPorId)

router.get('/search/:marca', [
    validarJWT,
    nodeCache(5),
    validarCampos,
], buscarAutos);

router.post('/', [
    /*   validarJWT,
      esAdminRol, */
    check('marca', 'routes.auto.check_marca_requerida').notEmpty(),
    check('modelo', 'routes.auto.check_modelo_requerido').notEmpty(),
    check('km', 'routes.auto.check_km_requeridos').notEmpty(),
    check('plazas', 'routes.auto.check_plazas_requeridas').notEmpty(),
    check('combustible', 'routes.auto.check_combustible_requerido').notEmpty(),
    check('precio', 'routes.auto.check_precio_requerido').notEmpty(),
    check('year', 'routes.auto.check_year_requerido').notEmpty(),
    check('agenciaId', 'routes.auto.check_agenciaId_requerida').notEmpty(),
    check('agenciaId').custom(existeAgenciaPorId),
    validarCampos
], crearAuto);

router.put('/image/:id', [
    validarJWT,
    esAdminRol,
    tieneImagen,
    check('id').custom(existeAutoPorId),
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