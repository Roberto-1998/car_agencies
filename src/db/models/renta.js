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
            this.belongsTo(models.Usuario, { as: 'usuario', foreignKey: 'usuarioId' });
            this.belongsTo(models.Auto, { as: 'auto', foreignKey: 'autoId' });
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
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        fechaFinal: {
            type: DataTypes.DATEONLY,
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