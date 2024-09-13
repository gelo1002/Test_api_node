import Joi from 'joi';

const identifier = Joi.string().max(10);
const name = Joi.string().max(20);
const description = Joi.string().max(200);
const price = Joi.number().less(100000000).precision(2);
const model = Joi.string().max(10);

const create = Joi.object({
    identifier: identifier.required(),
    name: name.required(),
    description: description.required(),
    price: price.required(),
    model: model.required(),
});

const update = Joi.object({
    description: description,
    model: model,
});

const id = Joi.object({
    identifier: identifier.required()
});

export default {
    id,
    create,
    update
}