const Usuario = require('../../db/models').Usuario;

const obtenerUsuarios = async() => {
    try {
        const usuarios = await Usuario.findAll();
        return usuarios;

    } catch (error) {
        console.log(error);
        throw Error('Error al obtener usuarios');
    }
}

const totalUsuarios = async() => {
    try {
        const total = await Usuario.count();
        return total;
    } catch (error) {
        console.log(error);
        throw Error('Error al contar usuarios');
    }

}

const crearUsuario = async(data) => {

    try {
        const usuario = await Usuario.create(data);
        return usuario

    } catch (error) {
        console.log(error);
        throw Error('Error al crear Usuario')
    }
}

const actualizarUsuario = async(data, id) => {

    try {
        await Usuario.update(data, { where: { id } })
        return 'Usuario actualizado';

    } catch (error) {
        console.log(error);
        throw Error('Error al actualizar Usuario');

    }

}


const eliminarUsuario = async(id) => {

    try {
        await Usuario.destroy({ where: { id } });
        return 'Usuario Eliminado'

    } catch (error) {
        console.log(error);
        throw Error('Error al borrar Usuario')

    }

}


module.exports = {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    totalUsuarios
}