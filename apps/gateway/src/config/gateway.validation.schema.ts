import * as Joi from 'joi';

export const validationSchema = Joi.object({
  GATEWAY_PORT: Joi.number().required(),
  GATEWAY_HOST: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().required(),
  REDIS_PASSWORD: Joi.string().required(),
  SWAGGER_USER: Joi.string().required(),
  SWAGGER_PASSWORD: Joi.string().required()
});
