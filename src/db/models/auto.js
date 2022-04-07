'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Auto extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Agencia, { as: 'agencia', foreignKey: 'agenciaId' });
            this.belongsToMany(models.Usuario, { through: models.Renta, foreignKey: 'usuarioId' });
        }
    }
    Auto.init({
        agenciaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING
        },
        km: {
            type: DataTypes.INTEGER
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cambio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plazas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        combustible: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'autos',
        sequelize,
        modelName: 'Auto',
    });
    return Auto;
};