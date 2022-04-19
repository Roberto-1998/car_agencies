const moment = require('moment');

const Renta = require('../../db/models').Renta;
const Usuario = require('../../db/models').Usuario;
const Auto = require('../../db/models').Auto;

const _auto = require('./autos');

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
        throw Error('renta.renta_obtenerTodas_error');
    }
}

const obtenerRentaPorUuid = async(uuid = '') => {
    try {
        const renta = await Renta.findOne({ where: { uuid } });
        return renta;

    } catch (error) {
        console.log(error);
        throw Error('renta.renta_obtenerPorUuidd_error');
    }
}

const verificarUnicaRenta = async(usuarioId = '', autoId = '') => {

    try {

        const renta = await Renta.findOne({ where: { usuarioId, autoId } });
        return renta

    } catch (error) {
        console.log(error);
        throw Error('renta.renta_verificarUnica_error');

    }

}

const totalRentas = async() => {
    try {
        const total = await Renta.count();
        return total;
    } catch (error) {
        console.log(error);
        throw Error('renta.renta_contar_error');
    }

}


const crearRenta = async(data) => {

    try {
        const { autoId, fechaInicio, fechaFinal } = data;

        const dateInicio = moment(fechaInicio);
        const dateFinal = moment(fechaFinal);

        const diasRenta = dateFinal.diff(dateInicio, 'days');

        const autoRentado = await _auto.obtenerAutoPorId(data.autoId);

        data.dias = diasRenta;
        data.importeTotal = diasRenta * autoRentado.precio;

        const renta = await Renta.create(data);

        await Auto.update({ disponible: false }, { where: { id: autoId } });

        return renta

    } catch (error) {
        console.log(error);
        throw Error('renta.renta_crear_error')
    }
}

const actualizarRenta = async(data, uuid) => {

    try {
        return await Renta.update(data, { where: { uuid } })


    } catch (error) {
        console.log(error);
        throw Error('renta.renta_actualizar_error');

    }

}


const eliminarRenta = async(uuid) => {

    try {
        return await Renta.destroy({ where: { uuid } });


    } catch (error) {
        console.log(error);
        throw Error('renta.renta_eliminar_error')

    }

}


module.exports = {
    obtenerRentas,
    crearRenta,
    actualizarRenta,
    eliminarRenta,
    totalRentas,
    obtenerRentaPorUuid,
    verificarUnicaRenta
}