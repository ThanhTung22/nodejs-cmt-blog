
const findOne = async (model, filter) => {
  try {
    return await model.findOne(filter);
  } catch (error) {
    throw error;
  }
};

const findAll = async (model) => {
  try {
    return await model.find();
  } catch (error) {
    throw error;
  }
};

const insert = async (model, filter) => {
  try {
    return await model.create(filter);
  } catch (error) {
    throw error;
  }
};

const update = async (model, filter, payload) => {
  try {
    // {new : true} in Mongoose 4.0 for ByidandUpdate
    return await model.findByIdAndUpdate(filter, payload, { new: true });
  } catch (error) {
    throw error;
  }
};

const deleteOne = async (model, filter) => {
  try {
    return await model.findByIdAndDelete(filter);
  } catch (error) {
    throw error;
  }
};

module.exports = { findOne, insert, update, deleteOne, findAll };

