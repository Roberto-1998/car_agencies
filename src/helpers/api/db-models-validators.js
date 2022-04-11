const _agencia = require('../../services');
const _auto = require('../../services');
const _usuario = require('../../services');
const _renta = require('../../services');

const existeAgenciaPorId = async(id = '') => {
    const agencia = await _agencia.obtenerAgenciaPorId(id);
    if (!agencia) {
        throw new Error(`No existe una agencia para el id ${id}`)
    }
}

const existeAutoPorId = async(id = '') => {
    const auto = await _auto.obtenerAutoPorId(id);
    if (!auto) {
        throw new Error(`No existe un auto para el id ${id}`)
    }
}

const existeUsuarioPorId = async(id = '') => {
    const usuario = await _usuario.obtenerUsuarioPorId(id);
    if (!usuario) {
        throw new Error(`No existe un usuario para el id ${id}`)
    }
}

const existeUsuarioPorCorreo = async(correo = '') => {
    const usuario = await _usuario.obtenerUsuarioPorCorreo(correo);
    if (usuario) {
        throw new Error(`El correo ${correo} ya se encuentra registrado`)
    }

}

const existeRentaPorUuid = async(uuid = '') => {
    const renta = await _renta.obtenerRentaPorUuid(uuid);
    if (!renta) {
        throw new Error(`No existe una renta para el uuid ${uuid}`)
    }
}

const verificarAutoDisponible = async(autoId = '') => {

    const auto = await _auto.obtenerAutoPorId(autoId);
    if (!auto.disponible) {
        throw new Error(`El auto con id ${autoId} no está disponible`)
    }

}





module.exports = {
    existeAgenciaPorId,
    existeAutoPorId,
    existeUsuarioPorId,
    existeRentaPorUuid,
    existeUsuarioPorCorreo,
    verificarAutoDisponible
}