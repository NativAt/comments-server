const Joi = require('joi');

// new comment validation schema
const schema = {
  body: {
    email: Joi.string().email().required(),
    message: Joi.string().min(1).required(),
    image: Joi.string().min(1).required(),
  },
};

module.exports = schema;
