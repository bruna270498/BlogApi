const { postService } = require('../service');

const newPost = async (req, res) => {
    const post = await postService.postNew(req.body);
    return res.status(201).json(post);
};
module.exports = {
    newPost,
};