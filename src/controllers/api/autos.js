const { request, response } = require('express');


const obtenerAutos = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const obtenerAuto = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}



const crearAuto = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const actualizarAuto = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const borrarAuto = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}


module.exports = {
    obtenerAutos,
    obtenerAuto,
    crearAuto,
    actualizarAuto,
    borrarAuto
}