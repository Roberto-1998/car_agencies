const { Op } = require('sequelize');

const Auto = require('../../db/models').Auto;
const Agencia = require('../../db/models').Agencia;

const obtenerAutos = async() => {
    try {
        const autos = await Auto.findAll({
            include: {
                model: Agencia,
                as: 'agencia',
                attributes: ['nombre']
            }
        });
        return autos;

    } catch (error) {
        console.log(error);
        throw Error('Error al obtener usuarios');
    }
}

const obtenerAutoPorId = async(id) => {
    try {
        const auto = await Auto.findOne({
            include: {
                model: Agencia,
                as: 'agencia',
                attributes: ['nombre']
            }
        }, { where: { id } });
        return auto;

    } catch (error) {
        console.log(error);
        throw Error('Error al obtener usuarios');
    }
}


const buscarAutos = async(marca = '') => {

    try {
        const autos = await Auto.findAll({
            where: {
                marca: {
                    [Op.like]: `%${marca}%`
                }
            }
        });

        return autos;

    } catch (error) {
        console.log(error);
        throw Error('Error al buscar los autos por el nombre')

    }





}

const crearAuto = async(data) => {

    try {
        const auto = await Auto.create(data);
        return auto;

    } catch (error) {
        console.log(error);
        throw Error('Error al crear Auto')
    }
}

const actualizarAuto = async(data, id) => {

    try {
        await Auto.update(data, { where: { id } })
        return 'Auto actualizado';

    } catch (error) {
        console.log(error);
        throw Error('Error al actualizar Auto');

    }

}


const eliminarAuto = async(id) => {

    try {
        await Auto.destroy({ where: { id } });
        return 'Auto Eliminado'

    } catch (error) {
        console.log(error);
        throw Error('Error al borrar Auto')

    }

}


module.exports = {
    obtenerAutos,
    buscarAutos,
    crearAuto,
    actualizarAuto,
    eliminarAuto,
    obtenerAutoPorId,
}