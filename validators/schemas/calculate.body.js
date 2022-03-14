const Joi = require('joi');

const schema = () => {
  return Joi.object({
    // room enum = ['square', 'circular']
    room: Joi.string().valid('square', 'circular').required(),
    // roomSize number
    roomSize: Joi.number().required(),
    // start position array [x, y]
    start: Joi.array().items(Joi.number()).length(2).required(),
    // instructions string
    instructions: Joi.string().required(),
  })
};

module.exports = schema;