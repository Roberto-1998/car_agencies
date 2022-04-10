const { request, response } = require('express');
const _auto = require('../../services');

const obtenerAutos = async(req = request, res = response, next) => {
    let autos;

    try {
        autos = await _auto.obtenerAutos();

        autos = autos.map((auto) => {
            if (auto.imagen) {
                auto.imagen = `${req.protocol}://${req.headers.host}/uploads/images/autos/${auto.imagen}`
            }
            return auto;
        })

        res.json(autos);
    } catch (e) {
        next(e);
    }
}

const obtenerAutoPorId = async(req = request, res = response, next) => {
    const { id } = req.params;
    let auto
    try {
        auto = await _auto.obtenerAutoPorId(id);

        if (auto.imagen) {
            auto.imagen = `${req.protocol}://${req.headers.host}/uploads/images/autos/${auto.imagen}`
        }

        res.json(auto);

    } catch (e) {
        next(e);
    }
}

const buscarAutos = async(req = request, res = response, next) => {

    const { marca } = req.params;
    let autos;
    try {

        autos = await _auto.buscarAutos(marca);

        autos = autos.map((auto) => {
            if (auto.imagen) {
                auto.imagen = `${req.protocol}://${req.headers.host}/uploads/images/autos/${auto.imagen}`
            }
            return auto;
        })

        return res.json(autos)

    } catch (e) {
        next(e);
    }

}

const crearAuto = async(req = request, res = response, next) => {

    const { id, ...data } = req.body;
    let auto;
    try {
        auto = await _auto.crearAuto(data);

        res.status(201).json(auto);

    } catch (e) {
        next(e);
    }

}

const uploadImage = async(req = request, res = response, next) => {

    const { id } = req.params;

    try {

        const msg = await _auto.uploadImage(id, req.file.filename);
        res.json(msg)

    } catch (e) {
        next(e);
    }
}



const actualizarAuto = async(req = request, res = response, next) => {

    const { id, ...data } = req.body
    const { id: autoId } = req.params

    try {
        const msg = await _auto.actualizarAuto(data, autoId);
        res.json({
            msg
        })

    } catch (e) {
        next(e);
    }

}

const borrarAuto = async(req = request, res = response, next) => {

    const { id } = req.params;

    try {

        const msg = await _auto.eliminarAuto(id);
        res.json({
            msg
        })

    } catch (e) {
        next(e);
    }

}


module.exports = {
    obtenerAutos,
    crearAuto,
    actualizarAuto,
    borrarAuto,
    obtenerAutoPorId,
    buscarAutos,
    uploadImage
}