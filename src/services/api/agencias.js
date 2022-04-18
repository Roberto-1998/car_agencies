const Agencia = require('../../db/models').Agencia;

const obtenerAgencias = async() => {
    try {
        const agencias = await Agencia.findAll();
        return agencias;

    } catch (error) {
        console.log(error);
        throw Error('Error al obtener agencias');
    }
}

const obtenerAgenciaPorId = async(id = '') => {
    try {
        const agencia = await Agencia.findByPk(id);
        return agencia;

    } catch (error) {
        console.log(error);
        throw Error('Error al obtener agencia por id');
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

const totalAgencias = async() => {

    try {
        const total = await Agencia.count();
        return total;

    } catch (error) {
        console.log(error);
        throw Error('Error al contar agencias')

    }

}

const actualizarAgencia = async(data, id) => {

    try {
        return await Agencia.update(data, { where: { id } });


    } catch (error) {
        console.log(error);
        throw Error('Error al actualizar Agencia');

    }

}


const eliminarAgencia = async(id) => {

    try {
        return await Agencia.destroy({ where: { id } });


    } catch (error) {
        console.log(error);
        throw Error('Error al borrar Agencia')

    }

}


module.exports = {
    obtenerAgencias,
    crearAgencia,
    actualizarAgencia,
    eliminarAgencia,
    totalAgencias,
    obtenerAgenciaPorId
}