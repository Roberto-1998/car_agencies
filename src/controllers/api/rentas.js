const { request, response } = require('express');


const obtenerRentas = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const crearRenta = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const actualizarRenta = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const borrarRenta = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}


module.exports = {
    obtenerRentas,
    crearRenta,
    actualizarRenta,
    borrarRenta,
}