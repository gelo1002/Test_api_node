async function findByAttributes(where, model) {
    let data = await model.findOne({
        where : where,
    });

    return data;
}

export default {
    findByAttributes
}