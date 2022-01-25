const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Blogs = require('./Blogs');
const CommentSchema = new Schema({
  id_blog: [{ type: Schema.Types.ObjectId, ref: Blogs }],
  name_cmt: String,
  content_cmt: String,
});

module.exports = mongoose.model('Comments', CommentSchema);
