import responseGeneral from '../helpers/response.helper.js';
import generalHelper from '../helpers/general.helper.js';
import sequelize from '../config/sequelize.js';
const { Product } = sequelize.models;

async function list(req, res, next) {
    try {
        let { page=0, quantity=10 } = req.query;

        const products = await Product.findAndCountAll({
            offset: (page * quantity),
            limit: quantity,
            order: [["id", "desc"]],
        });

        return responseGeneral(res, 1, 200, products);
    } catch (e) {
        next(e);
    }
}

async function create(req, res, next){
    try {
        const { body } = req;
        const { identifier } = body;
        const validator = await generalHelper.findByAttributes({ identifier }, Product);
        if(validator) {
            return responseGeneral(res, 1, 400, null, "El identificador, ya fue registrado ");
        }
        const result = await sequelize.transaction(async(t) => {
            const product = await Product.create({
                identifier,
                name: body.name,
                description: body.description,
                price: body.price,
                model: body.model
            },
                { transaction: t }
            );
            return product;
        });
        return responseGeneral(res, 1, 201, result);
    } catch (e) {
        next(e);
    }
}

async function show(req, res, next){
    try {
        const { identifier } = req.params;
        const product = await generalHelper.findByAttributes({ identifier }, Product);

        if(product) {
            return responseGeneral(res, 1, 200, product);
        }
        return responseGeneral(res, 0, 404);

    } catch (e) {
        next(e);
    }
}

async function update(req, res, next) {
    try {
        const { body, params } = req;
        const { identifier } = params;
        const product = await generalHelper.findByAttributes({ identifier }, Product);
        if(product) {
            await sequelize.transaction(async(t) => {
                await product.update({
                    description: body.description,
                    model: body.model
                },
                    { transaction: t }
                );
            });
            return responseGeneral(res, 1, 200);
        }
        return responseGeneral(res, 0, 404);

    } catch (e) {
        next(e);
    }
}

async function remove(req, res, next) {
    try {
        const { identifier } = req.params;
        const product = await generalHelper.findByAttributes({ identifier }, Product);

        if(product) {
            await Product.destroy({
                where: { identifier }
            });
            return responseGeneral(res, 1, 200, null, "Producto eliminado correctamente");
        }
        return responseGeneral(res, 0, 404);

    } catch (e) {
        next(e);
    }
}

export default {
    list,
    create,
    show,
    update,
    remove,
}