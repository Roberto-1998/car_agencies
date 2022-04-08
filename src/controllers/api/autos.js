const { request, response } = require('express');
const _auto = require('../../services');

const obtenerAutos = async(req = request, res = response) => {

    try {
        const autos = await _auto.obtenerAutos();
        res.json(autos);
    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }
}

const obtenerAutoPorId = async(req = request, res = response) => {
    const { id } = req.params;
    try {
        const auto = await _auto.obtenerAutoPorId(id);
        res.json(auto);

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }
}

const crearAuto = async(req = request, res = response) => {

    const { id, ...data } = req.body;
    try {
        const auto = await _auto.crearAuto(data);
        res.status(201).json(auto);

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }

}

const actualizarAuto = async(req = request, res = response) => {

    const { id, ...data } = req.body
    const { id: autoId } = req.params

    try {
        const msg = await _auto.actualizarAuto(data, autoId);
        res.json({
            msg
        })

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })



    }

}

const borrarAuto = async(req = request, res = response) => {

    const { id } = req.params;

    try {

        const msg = await _auto.eliminarAuto(id);
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
    obtenerAutos,
    crearAuto,
    actualizarAuto,
    borrarAuto,
    obtenerAutoPorId
}