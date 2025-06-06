export const errorHandler = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  let message = "Internal Server Error";

  if (err.name === "appError") {
    message = err.message || "Internal Server Error";
  }
  res.status(statusCode).json({
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
  next();
};
