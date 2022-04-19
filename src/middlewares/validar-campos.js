const { request, response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req = request, res = response, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array().map((err) => {
                err.msg = req.t(err.msg);
                return err
            })
        });
    }

    next();


}


module.exports = {
    validarCampos
}