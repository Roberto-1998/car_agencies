'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        toJSON() {
            return {...this.get(), password: undefined }
        }

        static associate(models) {
            // define association here
            this.belongsToMany(models.Auto, { through: models.Renta, foreignKey: 'usuarioId', as: 'usuario' });


        }
    }
    Usuario.init({
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user_rol',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        google: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'usuarios',
        sequelize,
        modelName: 'Usuario',
    });
    return Usuario;
};