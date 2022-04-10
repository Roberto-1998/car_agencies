const { request, response } = require('express');
const _agencia = require('../../services');

const obtenerAgencias = async(req = request, res = response) => {

    try {
        const agencias = await _agencia.obtenerAgencias();
        res.json(agencias);

    } catch (e) {

        res.status(500).json({
            msg: e.message
        })

    }

}

const crearAgencia = async(req = request, res = response) => {

    const { id, ...data } = req.body;
    try {
        const agencia = await _agencia.crearAgencia(data);
        res.status(201).json(agencia);

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }

}

const actualizarAgencia = async(req = request, res = response) => {

    const { id, ...data } = req.body
    const { id: agenciaId } = req.params

    try {
        const msg = await _agencia.actualizarAgencia(data, agenciaId);
        res.json({
            msg
        })

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })



    }

}

const borrarAgencia = async(req = request, res = response) => {

    const { id } = req.params;

    try {

        const msg = await _agencia.eliminarAgencia(id);
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
    obtenerAgencias,
    crearAgencia,
    actualizarAgencia,
    borrarAgencia
}