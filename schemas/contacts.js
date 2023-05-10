const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const ubdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});

module.exports = {
  addSchema,
  ubdateFavoriteSchema,
};
