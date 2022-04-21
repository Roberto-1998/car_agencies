const { Op } = require('sequelize');
const path = require('path');
const fs = require('fs');
const { cloudinaryUrl } = require('../../config');

const cloudinary = require('cloudinary').v2
    // Con esto nos autenticamos en Cloudinary
cloudinary.config(cloudinaryUrl);

const Auto = require('../../db/models').Auto;
const Agencia = require('../../db/models').Agencia;

const obtenerAutos = async() => {

    let autos;

    try {
        autos = await Auto.findAll({
            include: {
                model: Agencia,
                as: 'agencia',
                attributes: ['nombre']
            }
        });

        return autos;

    } catch (error) {
        console.log(error);
        throw Error('auto.auto_obtenerTodos_error');
    }
}

const obtenerAutoPorId = async(id) => {
    try {
        const auto = await Auto.findByPk(id, {
            include: {
                model: Agencia,
                as: 'agencia',
                attributes: ['nombre']
            }
        });
        return auto;

    } catch (error) {
        console.log(error);
        throw Error('auto.auto_obtenerPorId_error');
    }
}

const totalAutos = async() => {

    try {
        const total = await Auto.count();
        return total;

    } catch (error) {
        console.log(error);
        throw Error('auto.auto_contar_error')

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
        throw Error('auto.auto_buscarPorMarca_error')

    }





}

const crearAuto = async(data) => {

    try {
        const auto = await Auto.create(data);
        return auto;

    } catch (error) {
        console.log(error);
        throw Error('auto.auto_crear_error')
    }
}

const actualizarAuto = async(data, id) => {

    try {
        return await Auto.update(data, { where: { id } })


    } catch (error) {
        console.log(error);
        throw Error('auto.auto_actualizar_error');

    }

}


const eliminarAuto = async(id) => {

    try {

        const auto = await Auto.findByPk(id);
        if (auto.imagen) {
            const nombreArr = auto.imagen.split('/');
            const nombre = nombreArr[nombreArr.length - 1];
            const [public_id] = nombre.split('.');

            cloudinary.uploader.destroy(public_id);


        }

        return await Auto.destroy({ where: { id } });


    } catch (error) {
        console.log(error);
        throw Error('auto.auto_eliminar_error')

    }

}

/* const uploadImage = async(id, imageName) => {

    try {
        const auto = await Auto.findByPk(id);

        // Limpiar imágenes previas
        if (auto.imagen) {
            // Hay que borrar la imagen del servidor
            const pathImagen = path.join(__dirname, '../../../public/uploads/images/autos', auto.imagen);
            if (fs.existsSync(pathImagen)) {
                fs.unlinkSync(pathImagen);
            }
        }

        return await Auto.update({ imagen: imageName }, { where: { id } });


    } catch (error) {
        console.log(error);
        throw Error('auto.auto_actualizarImagen_error')

    }



} */

const uploadImageCloudinary = async(id, imagePath) => {

    try {
        const auto = await Auto.findByPk(id);

        // Limpiar imágenes previas de Cloudinary
        if (auto.imagen) {
            const nombreArr = auto.imagen.split('/');
            const nombre = nombreArr[nombreArr.length - 1];
            const [public_id] = nombre.split('.');

            cloudinary.uploader.destroy(public_id);

        }



        try {
            const { secure_url } = await cloudinary.uploader.upload(imagePath);
            return await Auto.update({ imagen: secure_url }, { where: { id } });

        } catch (error) {
            console.log(error);
            throw Error('auto.subir_imagen_cloudinary_error')
        }

    } catch (error) {
        console.log(error);
        throw Error('auto.auto_actualizarImagen_error')

    }



}


module.exports = {
    obtenerAutos,
    buscarAutos,
    crearAuto,
    actualizarAuto,
    eliminarAuto,
    obtenerAutoPorId,
    /*  uploadImage, */
    uploadImageCloudinary,
    totalAutos
}