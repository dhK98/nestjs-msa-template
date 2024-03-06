import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import expressBasicAuth = require('express-basic-auth');

const logger = new Logger('Gateway');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // get settingconfig
  const configService = app.get(ConfigService);
  const swaggerUser = configService.get('gateway.swagger.user');
  const swaggerPassword = configService.get('gateway.swagger.password');
  const port = configService.get('gateway.port');
  app.use(
    ['/api'],
    expressBasicAuth({
      challenge: true,
      users: { [`${swaggerUser}`]: `${swaggerPassword}` }
    })
  );
  // set swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('reborn')
    .setDescription('reborn api document')
    .setVersion('1.0')
    .addTag('reborn')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  // start server
  await app.listen(port).then(() => {
    logger.log(`Gateway microservice is listening on port ${port}`);
  });
}
bootstrap();
