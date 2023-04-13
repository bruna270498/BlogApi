const { postService } = require('../service');

const newPost = async (req, res) => {
    const { user } = req;
    const post = await postService.postNew(req.body, user);
    return res.status(201).json(post);
};
const findAll = async (req, res) => {
    const postAll = await postService.findAllPost();
    return res.status(200).json(postAll);
};
module.exports = {
    newPost,
    findAll,
};