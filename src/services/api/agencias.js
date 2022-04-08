const Agencia = require('../../db/models').Agencia;

const obtenerAgencias = async() => {
    try {
        const agencias = await Agencia.findAll();
        return agencias;

    } catch (error) {
        console.log(error);
        throw Error('Error al obtener usuarios');
    }
}

const crearAgencia = async(data) => {

    try {
        const agencia = await Agencia.create(data);
        return agencia

    } catch (error) {
        console.log(error);
        throw Error('Error al crear Agencia')
    }
}

const actualizarAgencia = async(data, id) => {

    try {
        await Agencia.update(data, { where: { id } })
        return 'Agencia actualizada';

    } catch (error) {
        console.log(error);
        throw Error('Error al actualizar Agencia');

    }

}


const eliminarAgencia = async(id) => {

    try {
        await Agencia.destroy({ where: { id } });
        return 'Agencia Eliminada'

    } catch (error) {
        console.log(error);
        throw Error('Error al borrar Agencia')

    }

}


module.exports = {
    obtenerAgencias,
    crearAgencia,
    actualizarAgencia,
    eliminarAgencia
}