const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const connectDB = async (err) => {
  try {
    await mongoose.connect('mongodb://localhost:27017/blog_cmt', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connect DB successfully!!");
  } catch (err) {
    console.log(err);
    logger.error(error.message);
  }
};


module.exports = { connectDB };
