"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = require("joi");
exports.validationSchema = Joi.object({
    GATEWAY_PORT: Joi.number().required(),
    GATEWAY_HOST: Joi.string().required(),
    REDIS_HOST: Joi.string().required(),
    REDIS_PORT: Joi.number().required(),
    REDIS_PASSWORD: Joi.string().required(),
    SWAGGER_USER: Joi.string().required(),
    SWAGGER_PASSWORD: Joi.string().required()
});
//# sourceMappingURL=gateway.validation.schema.js.map