const { request, response } = require('express');


const obtenerUsuarios = (req = request, res = response) => {

    try {




    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const crearUsuario = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const actualizarUsuario = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}

const borrarUsuario = (req = request, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })

    }

}


module.exports = {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
}