const _agencia = require('../../services');
const _auto = require('../../services');
const _usuario = require('../../services');
const _renta = require('../../services');
const _rol = require('../../services');

const existeAgenciaPorId = async(id = '') => {
    if (id !== '') {
        const agencia = await _agencia.obtenerAgenciaPorId(id);
        if (!agencia) {
            throw new Error('helper.existeAgenciaPorId_error')
        }
    }
}

const existeAutoPorId = async(id = '') => {
    if (id !== '') {
        const auto = await _auto.obtenerAutoPorId(id);
        if (!auto) {
            throw new Error('helper.existeAutoPorId_error')
        }
    }
}

const existeUsuarioPorId = async(id = '') => {
    if (id !== '') {
        const usuario = await _usuario.obtenerUsuarioPorId(id);
        if (!usuario) {
            throw new Error('helper.existeUsuarioPorId_error')
        }
    }
}

const existeUsuarioPorCorreo = async(correo = '') => {
    if (correo !== '') {
        const usuario = await _usuario.obtenerUsuarioPorCorreo(correo);
        if (usuario) {
            throw new Error('helper.existeUsuarioPorCorreo_error')
        }
    }
}

const existeRolPorNombre = async(nombre = '') => {
    if (nombre !== '') {
        const rol = await _rol.buscarRolPorNombre(nombre);
        if (!rol) {
            throw new Error('helper.existeRolPorNombre_error')
        }
    }



}

const existeRentaPorUuid = async(uuid = '') => {
    if (uuid !== '') {
        const renta = await _renta.obtenerRentaPorUuid(uuid);
        if (!renta) {
            throw new Error('helper.existeRentaPorUuid_error')
        }
    }
}

const verificarAutoDisponible = async(autoId = '') => {

    if (autoId !== '') {
        const auto = await _auto.obtenerAutoPorId(autoId);
        if (auto) {
            if (!auto.disponible) {
                throw new Error('helper.verificarAutoDisponible_error')
            }
        }
    }
}





module.exports = {
    existeAgenciaPorId,
    existeAutoPorId,
    existeUsuarioPorId,
    existeRentaPorUuid,
    existeUsuarioPorCorreo,
    verificarAutoDisponible,
    existeRolPorNombre

}