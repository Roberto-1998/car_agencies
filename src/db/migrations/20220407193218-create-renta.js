'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Rentas', {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                autoIncrement: false,

            },
            autoId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            usuarioId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            fechaInicio: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            fechaFinal: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            dias: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            importeTotal: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('Rentas');
    }
};