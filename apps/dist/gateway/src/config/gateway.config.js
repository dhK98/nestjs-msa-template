"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('gateway', () => ({
    port: parseInt(process.env.GATEWAY_PORT, 10),
    host: process.env.GATEWAY_HOST,
    redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT, 10),
        password: process.env.REDIS_PASSWORD
    },
    swagger: {
        user: process.env.SWAGGER_USER,
        password: process.env.SWAGGER_PASSWORD
    }
}));
//# sourceMappingURL=gateway.config.js.map