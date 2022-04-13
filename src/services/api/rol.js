const Rol = require('../../db/models').Rol;



const buscarRolPorNombre = async(nombre) => {

    try {
        const rol = await Rol.findOne({ where: { nombre } });
        return rol;

    } catch (error) {
        console.log(error);
        throw Error("Error al buscar Rol por nombre")
    }


}

module.exports = {
    buscarRolPorNombre
}