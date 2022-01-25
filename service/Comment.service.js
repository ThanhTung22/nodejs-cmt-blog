const Blogs = require('../model/Blogs');
const Comments = require('../model/Comments');
const { findOne,
  insert,
  findAll
} = require('./QueryAll');
const filter = require("lodash/filter");
const {
  getSuccess,
  postSuccess,
  errorHandle
} = require('../helper/Config_Message');
const { ObjectId } = require('mongodb');

const getByIdBlog = async (id) => {
  try {
    const dataBlog = await findOne(Blogs, { _id: id });
    if (!dataBlog) {
      return errorHandle(404, 'INVALID', 'Not Found');
    };
    const cmt_data = await Comments.find(
      {
        id_blog: { $in: dataBlog._id }
      });
    return getSuccess(cmt_data);
  } catch (error) {
    throw error;
  }
};

const insertCmt = async (payload) => {
  try {
    const record = await insert(Comments, payload);
    return postSuccess(record);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getByIdBlog,
  insertCmt,
};
