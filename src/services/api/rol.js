const Rol = require('../../db/models').Rol;



const buscarRolPorNombre = async(nombre) => {

    try {
        const rol = await Rol.findOne({ where: { nombre } });
        return rol;

    } catch (error) {
        console.log(error);
        throw Error("rol.rol_buscarPorNombre_error")
    }


}

module.exports = {
    buscarRolPorNombre
}