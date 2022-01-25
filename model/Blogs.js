const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model('Blogs', BlogSchema);
