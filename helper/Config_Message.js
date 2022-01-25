const errorHandle = (status, message_code, message) => {
  return ({ status, message_code, message });
};

const postSuccess = (data) => {
  return {
    message: 'Post Success',
    message_code: 'POST_SUCCESS',
    status: 200,
    data,
  };
};

const putSuccess = (data) => {
  return {
    message: 'Put Success',
    message_code: 'PUT SUCCESS',
    status: 200,
    data,
  };
};

const getSuccess = (data) => {
  return {
    message: 'Get Success',
    message_code: 'GET_SUCCESS',
    status: 200,
    data,
  };
};

const deleteSuccess = (data) => {
  return {
    message: 'Delete Success',
    message_code: 'DELETE_SUCCESS',
    status: 200,
    data,
  };
};


module.exports = {
  putSuccess,
  getSuccess,
  postSuccess,
  deleteSuccess,
  errorHandle
};



