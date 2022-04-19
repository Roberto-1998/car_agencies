const { check } = require('express-validator');
const { googleSignin } = require('../../controllers');
const { validarCampos } = require('../../middlewares');

const router = require('express').Router();



router.post('/', [
    check('id_token', 'routes.auth.google_signin_error').notEmpty(),
    validarCampos
], googleSignin)


module.exports = router;