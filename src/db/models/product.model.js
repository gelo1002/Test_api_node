/**
 * Product Schema
 */
import { Sequelize, DataTypes, Model } from 'sequelize';

const product_table = 'products';

const product_schema = {
    id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    identifier:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(10)
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(20)
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING(200)
    },
    price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10,2)
    },
    model: {
        allowNull: false,
        type: DataTypes.STRING(10)
    },
    created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}

class Product extends Model {
    static associate(){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName : product_table,
            modelName: 'Product',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    }
}

export default { product_table, product_schema, Product };