const express = require('express');
const router = express.Router();
const { createBlog,
  getBlogs } = require('../controller/BlogController');

router.route('/blog')
  .post(createBlog)
  .get(getBlogs);

module.exports = router;
