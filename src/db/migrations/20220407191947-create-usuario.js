'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Usuarios', {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
                type: Sequelize.UUID
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false
            },
            apellidos: {
                type: Sequelize.STRING,
                allowNull: false
            },
            correo: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            edad: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            telefono: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Usuarios');
    }
};