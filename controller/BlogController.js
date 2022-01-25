const Blogs = require('../model/Blogs');

const {
  insertBlog,
  getAll
} = require('../service/Blog.service');

const createBlog = async (req, res, next) => {
  try {
    const data = await insertBlog(req.body);
    res.status(data.status).json(data);
  } catch (error) {
    return next(error);
  }
};

const getBlogs = async (req, res, next) => {
  try {
    const data = await getAll();
    res.status(data.status).json(data);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createBlog,
  getBlogs,
};