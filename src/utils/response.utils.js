const logger = require('./logger.utils');

const sendSuccessResponse = (res, statusCode, message, data = {}) => {
  res.status(statusCode).json({
    status: 'success',
    message,
    data,
  });
};

const sendErrorResponse = (res, statusCode, error) => {
  logger.error(error);
  res.status(statusCode).json({
    status: 'error',
    message: error.message || 'Internal server error',
  });
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};
