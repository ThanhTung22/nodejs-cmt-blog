const express = require('express');
const router = express.Router();
const { createBlog,
  getBlogs, getBlogs2 } = require('../controller/BlogController');

router.route('/blog')
  .post(createBlog)
  .get(getBlogs2);

module.exports = router;
