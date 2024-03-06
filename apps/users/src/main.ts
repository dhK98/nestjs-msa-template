import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('User');

const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    prefix: 'user_namespace'
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  await app.listen().then(() => {
    logger.log(`User microservice is listening`);
  });
}
bootstrap();
