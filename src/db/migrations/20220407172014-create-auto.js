'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Autos', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            agenciaId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            marca: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            modelo: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            imagen: {
                type: Sequelize.STRING
            },
            km: {
                type: Sequelize.INTEGER
            },
            precio: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            year: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            cambio: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            plazas: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            combustible: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            disponible: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
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
        await queryInterface.dropTable('Autos');
    }
};