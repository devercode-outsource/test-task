const { article$Create, article$DeleteById, article$GetAll, article$GetById, article$Update } = require('./article.repository')
const getAll = async () => {
    const articles = await article$GetAll();
    return articles;
}

const getById = async (dto) => {
    const article = await article$GetById(dto.id);
    return article;
}

const deleteById = async (dto) => {
    const deleted = await article$DeleteById(dto.id);
    return `delete article's id: ${deleted.id}`;
}

const create = async (dto) => {
    const article = await article$Create(dto);
    return article
}
const update = async (id, dto) => {
    const article = await article$Update(Number(id), dto);
    return article
}
module.exports = {
    create,
    deleteById,
    getById,
    getAll,
    update
}