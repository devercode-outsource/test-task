
const prisma = require('../prisma/client');
const article$GetAll = async () => {
    const articles = await prisma.article.findMany();
    return articles;
}

const article$GetById = async (id) => {
    const article = await prisma.article.findFirst({
        where: {
            id: id
        }
    })
    return article
}

const article$DeleteById = async (id) => {
    const deleted = await prisma.article.delete({
        where: {
            id
        }
    })
    return deleted
}

const article$Create = async (data) => {
    const article = await prisma.article.create({
        data
    })
    return article
}

const article$Update = async (id, data) => {
    const article = await prisma.article.update({
        data: data,
        where: {
            id
        }
    })
    return article
}

module.exports = {
    article$Create,
    article$DeleteById,
    article$GetById,
    article$GetAll,
    article$Update
}
