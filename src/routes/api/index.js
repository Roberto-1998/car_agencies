const router = require('express').Router();

const autosRouter = require('./autos');
const usuariosRouter = require('./usuarios');
const rentasRouter = require('./rentas');
const agenciasRouter = require('./agencias');

router.use('/autos', autosRouter);
router.use('/usuarios', usuariosRouter);
router.use('/agencias', agenciasRouter);
router.use('/rentas', rentasRouter);


module.exports = router