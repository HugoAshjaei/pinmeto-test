const schema = require('./schemas'),
    _ = require('lodash'),
    sendResponse = require('../utils/sendResponse');
const validate = (validator) => {
    return (req, res, next) => {
        let error = {};
        if (schema[`${validator}.body`]) {
            error = {
                ...error,
                ...(schema[`${validator}.body`]().validate(req.body, {
                    abortEarly: false
                })).error
            };
        }
        if (schema[`${validator}.params`]) {
            error = {
                ...error,
                ...(schema[`${validator}.params`]().validate(req.params, {
                    abortEarly: false
                })).error
            };
        }
        if (schema[`${validator}.query`]) {
            error = {
                ...error,
                ...(schema[`${validator}.query`]().validate(req.query, {
                    abortEarly: false
                })).error
            };
        }
        if (Object.keys(error).length > 0) {
            const errors = {};
            error.details.forEach(item => {
                errors[item.path[0]] = item.message;
            });
            return sendResponse(res, 400, errors);
        }
        return next();
    };
}


module.exports = validate;