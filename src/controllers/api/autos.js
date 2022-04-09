const { request, response } = require('express');
const _auto = require('../../services');

const obtenerAutos = async(req = request, res = response) => {
    let autos;

    try {
        autos = await _auto.obtenerAutos();

        autos = autos.map((auto) => {
            auto.imagen = `${req.protocol}://${req.headers.host}/uploads/images/autos/${auto.imagen}`
            return auto;
        })

        res.json(autos);
    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }
}

const obtenerAutoPorId = async(req = request, res = response) => {
    const { id } = req.params;
    let auto
    try {
        auto = await _auto.obtenerAutoPorId(id);

        auto.imagen = `${req.protocol}://${req.headers.host}/uploads/images/autos/${auto.imagen}`

        res.json(auto);

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }
}

const buscarAutos = async(req = request, res = response) => {

    const { marca } = req.params;
    let autos;
    try {

        autos = await _auto.buscarAutos(marca);

        autos = autos.map((auto) => {
            auto.imagen = `${req.protocol}://${req.headers.host}/uploads/images/autos/${auto.imagen}`
            return auto;
        })

        return res.json(autos)

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })

    }

}

const crearAuto = async(req = request, res = response) => {

    const { id, ...data } = req.body;
    let auto;
    try {
        auto = await _auto.crearAuto(data);

        res.status(201).json(auto);

    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }

}

const uploadImage = async(req = request, res = response) => {

    const { id } = req.params;

    try {

        const msg = await _auto.uploadImage(id, req.file.filename);
        res.json(msg)

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
    obtenerAutoPorId,
    buscarAutos,
    uploadImage
}