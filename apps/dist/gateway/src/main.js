"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const expressBasicAuth = require("express-basic-auth");
const logger = new common_1.Logger('Gateway');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const swaggerUser = configService.get('gateway.swagger.user');
    const swaggerPassword = configService.get('gateway.swagger.password');
    const port = configService.get('gateway.port');
    app.use(['/api'], expressBasicAuth({
        challenge: true,
        users: { [`${swaggerUser}`]: `${swaggerPassword}` }
    }));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('reborn')
        .setDescription('reborn api document')
        .setVersion('1.0')
        .addTag('reborn')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port).then(() => {
        logger.log(`Gateway microservice is listening on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map