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

    const { uuid, usuarioId, dias, importeTotal, ...data } = req.body;
    try {

        data.usuarioId = req.usuarioId;


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
        await _renta.actualizarRenta(data, rentaUuid);
        res.json({
            msg: req.t('renta.renta_actualizada_exito')
        })

    } catch (e) {
        next(e)
    }

}

const borrarRenta = async(req = request, res = response, next) => {

    const { uuid } = req.params;

    try {

        await _renta.eliminarRenta(uuid);
        res.json({
            msg: req.t('renta.renta_eliminada_exito')
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