const express = require('express');
const router = express.Router();
const { createCmt, listCmtByBlogId } = require('../controller/CommentController');

router.route('/comment')
  .post(createCmt)

router.route('/comment/:id')
  .get(listCmtByBlogId);

module.exports = router;
