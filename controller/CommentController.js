const Comments = require('../model/Comments');

const { getByIdBlog , insertCmt } = require('../service/Comment.service');

const createCmt = async (req, res, next) => {
  try {
    const data = await insertCmt(req.body);
    res.status(data.status).json(data);
  } catch (error) {
    return next(error);
  }
};


const listCmtByBlogId = async (req, res, next) => {
  try {
    const data = await getByIdBlog(req.params.id);
    res.status(data.status).json(data);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  listCmtByBlogId,
  createCmt,
};
