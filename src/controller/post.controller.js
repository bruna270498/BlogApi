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
const findById = async (req, res) => {
    const { id } = req.params;
    const postId = await postService.findId(id);
    return res.status(200).json(postId);
};
const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = await postService.postUpdate(id, req.body);
    return res.status(200).json(post);
};
module.exports = {
    newPost,
    findAll,
    findById,
    updatePost,
};