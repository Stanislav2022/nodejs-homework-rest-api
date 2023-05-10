const { HttpError } = require("../helpers");

const isBodyFavorite = (req, res, next) => {
  const bul = req.body.favorite;
  if (bul !== true && bul !== false) {
    next(HttpError(400, `"missing field favorite"`));
  }
  next();
};

module.exports = isBodyFavorite;
