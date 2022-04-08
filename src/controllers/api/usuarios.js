const { request, response } = require('express');
const _usuario = require('../../services');

const obtenerUsuarios = async(req = request, res = response) => {

    try {
        const usuarios = await _usuario.obtenerUsuarios();
        res.json(usuarios);

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })

    }

}

const crearUsuario = async(req = request, res = response) => {

    const { id, ...data } = req.body;
    try {
        const usuario = await _usuario.crearUsuario(data);
        res.status(201).json(usuario);

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }

}

const actualizarUsuario = async(req = request, res = response) => {

    const { id, ...data } = req.body
    const { id: usuarioId } = req.params

    try {
        const msg = await _usuario.actualizarUsuario(data, usuarioId);
        res.json({
            msg
        })

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })



    }

}

const borrarUsuario = async(req = request, res = response) => {

    const { id } = req.params;

    try {

        const msg = await _usuario.eliminarUsuario(id);
        res.json({
            msg
        })


    } catch (e) {
        res.status(500).json({
            msg: e.message
        })

    }

}


module.exports = {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}