const { request, response } = require('express');
const _renta = require('../../services');

const obtenerRentas = async(req = request, res = response) => {

    try {
        const rentas = await _renta.obtenerRentas();
        res.json(rentas);

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })

    }

}

const crearRenta = async(req = request, res = response) => {

    const { uuid, ...data } = req.body;
    try {
        const renta = await _renta.crearRenta(data);
        res.status(201).json(renta);

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }

}

const actualizarRenta = async(req = request, res = response) => {

    const { uuid, ...data } = req.body
    const { uuid: rentaUuid } = req.params

    try {
        const msg = await _renta.actualizarRenta(data, rentaUuid);
        res.json({
            msg
        })

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })



    }

}

const borrarRenta = async(req = request, res = response) => {

    const { uuid } = req.params;

    try {

        const msg = await _renta.eliminarRenta(uuid);
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
    obtenerRentas,
    crearRenta,
    actualizarRenta,
    borrarRenta
}