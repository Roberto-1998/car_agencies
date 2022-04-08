const Renta = require('../../db/models').Renta;

const obtenerRentas = async() => {
    try {
        const rentas = await Renta.findAll();
        return rentas;

    } catch (error) {
        console.log(error);
        throw Error('Error al obtener usuarios');
    }
}

const crearRenta = async(data) => {

    try {
        const renta = await Renta.create(data);
        return renta

    } catch (error) {
        console.log(error);
        throw Error('Error al crear Renta')
    }
}

const actualizarRenta = async(data, uuid) => {

    try {
        await Renta.update(data, { where: { uuid } })
        return 'Renta actualizada';

    } catch (error) {
        console.log(error);
        throw Error('Error al actualizar Renta');

    }

}


const eliminarRenta = async(uuid) => {

    try {
        await Renta.destroy({ where: { uuid } });
        return 'Renta Eliminada'

    } catch (error) {
        console.log(error);
        throw Error('Error al borrar Renta')

    }

}


module.exports = {
    obtenerRentas,
    crearRenta,
    actualizarRenta,
    eliminarRenta
}