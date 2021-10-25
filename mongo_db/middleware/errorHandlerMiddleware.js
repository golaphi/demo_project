const errorHandlerMiddleware = async (err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
};

module.exports = errorHandlerMiddleware;
