const {
  article$Create,
  article$DeleteById,
  article$GetAll,
  article$GetById,
  article$Update,
} = require("./article.repository");
const getAll = async () => {
  const articles = await article$GetAll();
  return articles;
};

const getById = async (id) => {
  const article = await article$GetById(Number(id));
  return article;
};

const deleteById = async (id) => {
  const deleted = await article$DeleteById(Number(id));
  return `delete article's id: ${deleted.id}`;
};

const create = async (dto) => {
  const article = await article$Create(dto);
  return article;
};
const update = async (id, dto) => {
  const article = await article$Update(Number(id), dto);
  return article;
};
module.exports = {
  create,
  deleteById,
  getById,
  getAll,
  update,
};
