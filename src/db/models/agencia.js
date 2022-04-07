'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Agencia extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Auto, { as: 'autos', foreignKey: 'agenciaId' })
        }
    }
    Agencia.init({
        nombre: DataTypes.STRING,
        direccion: DataTypes.STRING,
        telefono: DataTypes.STRING
    }, {
        tableName: 'agencias',
        sequelize,
        modelName: 'Agencia',
    });
    return Agencia;
};