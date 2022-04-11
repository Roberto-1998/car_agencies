'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Renta', {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                autoIncrement: false,

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
        await queryInterface.dropTable('Renta');
    }
};