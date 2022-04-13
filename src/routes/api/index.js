const router = require('express').Router();

const autosRouter = require('./autos');
const usuariosRouter = require('./usuarios');
const rentasRouter = require('./rentas');
const agenciasRouter = require('./agencias');
const { validarJWT } = require('../../middlewares/validar-token');

router.use('/autos', autosRouter);
router.use('/usuarios', usuariosRouter);
router.use('/agencias', agenciasRouter);
router.use('/rentas', [
    validarJWT
], rentasRouter);


module.exports = router