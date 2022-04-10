const { request, response } = require('express');
const _agencia = require('../../services');

const obtenerAgencias = async(req = request, res = response, next) => {

    try {
        const [total, agencias] = await Promise.all([_agencia.totalAgencias(), _agencia.obtenerAgencias()])

        res.json({
            total,
            agencias
        });

    } catch (e) {
        next(e)
    }

}

const crearAgencia = async(req = request, res = response, next) => {

    const { id, ...data } = req.body;
    try {
        const agencia = await _agencia.crearAgencia(data);
        res.status(201).json(agencia);

    } catch (e) {
        next(e);
    }

}

const actualizarAgencia = async(req = request, res = response, next) => {

    const { id, ...data } = req.body
    const { id: agenciaId } = req.params

    try {
        const msg = await _agencia.actualizarAgencia(data, agenciaId);
        res.json({
            msg
        })

    } catch (e) {
        next(e)
    }

}

const borrarAgencia = async(req = request, res = response, next) => {

    const { id } = req.params;

    try {

        const msg = await _agencia.eliminarAgencia(id);
        res.json({
            msg
        })


    } catch (e) {
        next(e)
    }

}


module.exports = {
    obtenerAgencias,
    crearAgencia,
    actualizarAgencia,
    borrarAgencia
}