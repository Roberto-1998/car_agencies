const { check } = require('express-validator');
const { login } = require('../../controllers/auth/login');
const { validarCampos } = require('../../middlewares');


const router = require('express').Router();

router.post('/', [
    check('correo', 'El correo es requerido').notEmpty(),
    check('password', 'El password es requerido').notEmpty(),
    validarCampos
], login);

module.exports = router