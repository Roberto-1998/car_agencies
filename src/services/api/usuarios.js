const Usuario = require('../../db/models').Usuario;

const obtenerUsuarios = async() => {
    try {
        const usuarios = await Usuario.findAll();
        return usuarios;

    } catch (error) {
        console.log(error);
        throw Error('usuario.usuario_obtenerTodos_error');
    }
}

const obtenerUsuarioPorId = async(id = '') => {
    try {
        const usuario = await Usuario.findByPk(id);
        return usuario;

    } catch (error) {
        console.log(error);
        throw Error('usuario.usuario_obtenerPorId_error');
    }
}

const obtenerUsuarioPorCorreo = async(correo = '') => {
    try {
        const usuario = await Usuario.findOne({ where: { correo } });
        return usuario;

    } catch (error) {
        console.log(error);
        throw Error('usuario.usuario_obtenerPorCorreo_error');
    }
}

const totalUsuarios = async() => {
    try {
        const total = await Usuario.count();
        return total;
    } catch (error) {
        console.log(error);
        throw Error('usuario.usuario_contar_error');
    }

}

const crearUsuario = async(data) => {

    try {
        const usuario = await Usuario.create(data);
        return usuario

    } catch (error) {
        console.log(error);
        throw Error('usuario.usuario_crear_error')
    }
}

const actualizarUsuario = async(data, id) => {

    try {
        return await Usuario.update(data, { where: { id } })


    } catch (error) {
        console.log(error);
        throw Error('usuario.usuario_actualizar_error');

    }

}


const eliminarUsuario = async(id) => {

    try {
        return await Usuario.destroy({ where: { id } });


    } catch (error) {
        console.log(error);
        throw Error('usuario.usuario_eliminar_error')

    }

}


module.exports = {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    totalUsuarios,
    obtenerUsuarioPorId,
    obtenerUsuarioPorCorreo
}