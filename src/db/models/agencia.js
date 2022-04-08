'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Agencia extends Model {

        static associate(models) {

            this.hasMany(models.Auto, { as: 'autos', foreignKey: 'agenciaId' })
        }
    }
    Agencia.init({
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'agencias',
        sequelize,
        modelName: 'Agencia',
    });
    return Agencia;
};