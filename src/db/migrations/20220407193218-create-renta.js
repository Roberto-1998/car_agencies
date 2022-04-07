'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Renta', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fechaInicio: {
                type: Sequelize.STRING,
                allowNull: false
            },
            fechaFinal: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('Renta');
    }
};