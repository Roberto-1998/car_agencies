'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Agencias', {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
                type: Sequelize.UUID
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            direccion: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            telefono: {
                type: Sequelize.STRING,
                allowNull: false,
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
        await queryInterface.dropTable('Agencias');
    }
};