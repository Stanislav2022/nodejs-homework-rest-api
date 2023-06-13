const Joi = require("joi");
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const subscriptionList = ["starter", "pro", "business"];

const registerSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

module.exports = {
  registerSchema,
  emailSchema,
  loginSchema,
  subscriptionSchema,
};
