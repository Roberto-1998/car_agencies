'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Agencias', [{
                nombre: 'RentaCar',
                telefono: '77958164',
                direccion: 'Calle 14 /3ra y 5ta ave Miramar, Playa',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nombre: 'Cars Deluxe',
                telefono: '77777777',
                direccion: 'Calle 5ta /88 y 90  Miramar, Playa',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Agencias', null, {});
    }
};