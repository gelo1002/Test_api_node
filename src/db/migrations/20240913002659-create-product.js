'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('products', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        identifier:{
            allowNull: false,
            unique: true,
            type: Sequelize.STRING(10)
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(20)
        },
        description: {
            allowNull: false,
            type: Sequelize.STRING(200)
        },
        price: {
            allowNull: false,
            type: Sequelize.DECIMAL(10,2)
        },
        model: {
            allowNull: false,
            type: Sequelize.STRING(10)
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('products');
    }
};