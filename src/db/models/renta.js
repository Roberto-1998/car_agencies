'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Renta extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Renta.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            autoIncrement: false,
            primaryKey: false
        },
        autoId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fechaInicio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fechaFinal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dias: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        importeTotal: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'rentas',
        sequelize,
        modelName: 'Renta',
    });
    return Renta;
};