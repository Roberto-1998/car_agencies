const { request, response } = require('express');
const _renta = require('../../services');

const obtenerRentas = async(req = request, res = response, next) => {

    try {
        const [total, rentas] = await Promise.all([
            _renta.totalRentas(), _renta.obtenerRentas()
        ])

        res.json({
            total,
            rentas
        });

    } catch (e) {
        next(e)
    }

}

const crearRenta = async(req = request, res = response, next) => {

    const { uuid, dias, ...data } = req.body;
    try {
        const renta = await _renta.crearRenta(data);
        res.status(201).json(renta);

    } catch (e) {
        next(e)
    }

}

const actualizarRenta = async(req = request, res = response, next) => {

    const { uuid, ...data } = req.body
    const { uuid: rentaUuid } = req.params

    try {
        const msg = await _renta.actualizarRenta(data, rentaUuid);
        res.json({
            msg
        })

    } catch (e) {
        next(e)
    }

}

const borrarRenta = async(req = request, res = response, next) => {

    const { uuid } = req.params;

    try {

        const msg = await _renta.eliminarRenta(uuid);
        res.json({
            msg
        })


    } catch (e) {
        next(e)
    }

}


module.exports = {
    obtenerRentas,
    crearRenta,
    actualizarRenta,
    borrarRenta
}