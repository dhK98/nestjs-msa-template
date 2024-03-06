"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const logger = new common_1.Logger('User');
const microserviceOptions = {
    transport: microservices_1.Transport.REDIS,
    options: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
        prefix: 'user_namespace'
    }
};
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, microserviceOptions);
    await app.listen().then(() => {
        logger.log(`User microservice is listening`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map