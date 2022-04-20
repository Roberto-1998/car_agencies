const { request, response } = require('express');
const _auto = require('../../services');


const obtenerAutos = async(req = request, res = response, next) => {

    try {

        let [total, autos] = await Promise.all([
            _auto.totalAutos(), _auto.obtenerAutos()
        ])

        autos = autos.map((auto) => {
            if (auto.imagen) {
                auto.imagen = `${req.protocol}://${req.headers.host}/uploads/images/autos/${auto.imagen}`
            } else {
                auto.imagen = `${req.protocol}://${req.headers.host}/images/no-image.jpg`
            }
            return auto;
        })

        res.json({
            total,
            autos
        });
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
        } else {
            auto.imagen = `${req.protocol}://${req.headers.host}/images/no-image.jpg`
        }

        res.json(auto);

    } catch (e) {
        next(e);
    }
}

const buscarAutos = async(req = request, res = response, next) => {

    const { marca } = req.params;

    try {

        let [total, autos] = await Promise.all([
            _auto.totalAutos(), _auto.buscarAutos(marca)
        ])

        autos = autos.map((auto) => {
            if (auto.imagen) {
                auto.imagen = `${req.protocol}://${req.headers.host}/uploads/images/autos/${auto.imagen}`
            } else {
                auto.imagen = `${req.protocol}://${req.headers.host}/images/no-image.jpg`
            }
            return auto;
        })

        return res.json({
            total,
            autos
        })

    } catch (e) {
        next(e);
    }

}

const crearAuto = async(req = request, res = response, next) => {

    const { id, disponible, ...data } = req.body;
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
        await _auto.uploadImage(id, req.file.filename);
        res.json({
            msg: req.t('auto.imagen_subida_exito')
        })

    } catch (e) {
        next(e);
    }
}



const actualizarAuto = async(req = request, res = response, next) => {

    const { id, disponible, ...data } = req.body
    const { id: autoId } = req.params

    try {
        await _auto.actualizarAuto(data, autoId);
        res.json({
            msg: req.t('auto.auto_actualizado_exito')
        })

    } catch (e) {
        next(e);
    }

}

const borrarAuto = async(req = request, res = response, next) => {

    const { id } = req.params;

    try {

        await _auto.eliminarAuto(id);
        res.json({
            msg: req.t('auto.auto_eliminado_exito')
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