const { request, response } = require('express');
const bcrypt = require('bcryptjs');
const _usuario = require('../../services');

const obtenerUsuarios = async(req = request, res = response, next) => {

    try {
        const [total, usuarios] = await Promise.all([
            _usuario.totalUsuarios(), _usuario.obtenerUsuarios()
        ])

        res.json({
            total,
            usuarios
        });

    } catch (e) {
        next(e)
    }

}

const crearUsuario = async(req = request, res = response, next) => {

    const { id, password, ...data } = req.body;
    try {

        // Encriptar password
        const salt = bcrypt.genSaltSync(10);
        data.password = bcrypt.hashSync(password, salt);

        const usuario = await _usuario.crearUsuario(data);
        res.status(201).json(usuario);

    } catch (e) {
        next(e)
    }

}

const actualizarUsuario = async(req = request, res = response, next) => {

    const { id, password, ...data } = req.body
    const { id: usuarioId } = req.params

    try {
        if (password) {
            const salt = bcrypt.genSaltSync(10);
            data.password = bcrypt.hashSync(password, salt);
        }

        const msg = await _usuario.actualizarUsuario(data, usuarioId);
        res.json({
            msg
        })

    } catch (e) {
        next(e)
    }

}

const borrarUsuario = async(req = request, res = response, next) => {

    const { id } = req.params;

    try {

        const msg = await _usuario.eliminarUsuario(id);
        res.json({
            msg
        })


    } catch (e) {
        next(e)
    }

}


module.exports = {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}