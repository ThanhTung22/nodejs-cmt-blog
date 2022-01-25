const Blogs = require('../model/Blogs');
const { insert } = require('./QueryAll');
const {
  getSuccess,
  postSuccess,
  errorHandle
} = require('../helper/Config_Message');

const getAll = async () => {
  try {
    const data = await Blogs.find({ name: { $options: '$i' } });
    if (!data) {
      return errorHandle(404, 'INVALID', 'Not Found');
    }
    return getSuccess(data);
  } catch (error) {
    throw error;
  }
};

const insertBlog = async (payload) => {
  try {
    const record = await insert(Blogs, payload);
    return postSuccess(record);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  insertBlog,
};
