const { HttpError } = require("../helpers");

const isBodyFavorite = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(error);
    if (error) {
      next(HttpError(400, ' "message": "missing field favorite"'));
    }
    next();
  };
  return func;
};
module.exports = isBodyFavorite;
