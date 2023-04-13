const { postService } = require('../service');

const newPost = async (req, res) => {
    const { user } = req;
    const post = await postService.postNew(req.body, user);
    return res.status(201).json(post);
};
module.exports = {
    newPost,
};