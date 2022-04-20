const Agencia = require('../../db/models').Agencia;
const Auto = require('../../db/models').Auto;

const obtenerAgencias = async() => {
    try {
        const agencias = await Agencia.findAll({
            include: {
                model: Auto,
                as: 'autos',
                attributes: ['id', 'marca', 'modelo']
            }
        });
        return agencias;

    } catch (error) {
        console.log(error);
        throw Error('agencia.agencia_obtenerTodas_error');
    }
}

const obtenerAgenciaPorId = async(id = '') => {
    try {
        const agencia = await Agencia.findByPk(id);
        return agencia;

    } catch (error) {
        console.log(error);
        throw Error('agencia.agencia_obtenerPorId_error');
    }
}





const crearAgencia = async(data) => {

    try {
        const agencia = await Agencia.create(data);
        return agencia

    } catch (error) {
        console.log(error);
        throw Error('agencia.agencia_crear_error')
    }
}

const totalAgencias = async() => {

    try {
        const total = await Agencia.count();
        return total;

    } catch (error) {
        console.log(error);
        throw Error('agencia.agencia_contar_error')

    }

}

const actualizarAgencia = async(data, id) => {

    try {
        return await Agencia.update(data, { where: { id } });


    } catch (error) {
        console.log(error);
        throw Error('agencia.agencia_actualizar_error');

    }

}


const eliminarAgencia = async(id) => {

    try {
        return await Agencia.destroy({ where: { id } });


    } catch (error) {
        console.log(error);
        throw Error('agencia.agencia_eliminar_error')

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