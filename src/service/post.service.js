const { BlogPost } = require('../models');

const postNew = async ({ title, content, categoryIds }) => {
    const post = await BlogPost.create({ title, content, categoryIds });
    console.log(post);
    return post;
};
module.exports = {
    postNew,
};