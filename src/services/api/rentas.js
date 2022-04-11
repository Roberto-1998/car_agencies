const moment = require('moment');

const Renta = require('../../db/models').Renta;
const Usuario = require('../../db/models').Usuario;
const Auto = require('../../db/models').Auto;

const obtenerRentas = async() => {
    try {
        const rentas = await Renta.findAll({
            include: [{
                    model: Usuario,
                    as: 'usuario',
                    attributes: ['nombre', 'apellidos', 'telefono']
                },
                {
                    model: Auto,
                    as: 'auto',
                    attributes: ['marca', 'modelo']
                }
            ],
            through: {
                model: Renta
            }
        });
        return rentas;

    } catch (error) {
        console.log(error);
        throw Error('Error al obtener usuarios');
    }
}

const totalRentas = async() => {
    try {
        const total = await Renta.count();
        return total;
    } catch (error) {
        console.log(error);
        throw Error('Error al contar rentas');
    }

}


const crearRenta = async(data) => {

    try {
        const { fechaInicio, fechaFinal } = data;

        const dateInicio = moment(fechaInicio);
        const dateFinal = moment(fechaFinal);

        data.dias = dateFinal.diff(dateInicio, 'days');


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
    eliminarRenta,
    totalRentas
}