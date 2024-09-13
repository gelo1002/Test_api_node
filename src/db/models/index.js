import ProductModel from './product.model.js';

function setupModels(sequelize){
    ProductModel.Product.init(ProductModel.product_schema, ProductModel.Product.config(sequelize));
}

export default setupModels;