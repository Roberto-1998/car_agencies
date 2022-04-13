'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rol extends Model {

        static associate(models) {

        }
    }
    Rol.init({
        nombre: DataTypes.STRING
    }, {
        tableName: 'roles',
        sequelize,
        modelName: 'Rol',
    });
    return Rol;
};