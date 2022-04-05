const { request, response } = require('express');


const obtenerAgencias = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const crearAgencia = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const actualizarAgencia = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const borrarAgencia = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}


module.exports = {
    obtenerAgencias,
    crearAgencia,
    actualizarAgencia,
    borrarAgencia
}