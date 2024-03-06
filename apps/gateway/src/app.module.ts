import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import gatewayConfig from './config/gateway.config';
import { validationSchema } from './config/gateway.validation.schema';
import { ClientOptions, ClientProxyFactory } from '@nestjs/microservices';
import { TransportConfig } from './config/transport.config';
import { UsersController } from './controller/users.controller';
import { ExerciseController } from './controller/exercise.controller';
import { ImageController } from './controller/image.controller';
import { PointController } from './controller/point.controller';
import { RoutineController } from './controller/routine';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        path.resolve(__dirname, '..', '..', '..', 'config', `.${process.env.NODE_ENV}.env`),
        path.resolve(__dirname, '..', '..', 'config', `.${process.env.NODE_ENV}.env`)
      ],
      load: [gatewayConfig],
      isGlobal: true,
      validationSchema
    })
  ],
  controllers: [
    // GatewayController,
    UsersController,
    ExerciseController,
    ImageController,
    PointController,
    RoutineController
  ],
  providers: [
    TransportConfig,
    {
      provide: 'USER_SERVICE',
      useFactory: (transportConfig: TransportConfig) => {
        const userServiceOptions: ClientOptions = transportConfig.get('transportOption');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [TransportConfig]
    },
    TransportConfig,
    {
      provide: 'ROUTINE_SERVICE',
      useFactory: (transportConfig: TransportConfig) => {
        const userServiceOptions: ClientOptions = transportConfig.get('transportOption');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [TransportConfig]
    },
    TransportConfig,
    {
      provide: 'POINT_SERVICE',
      useFactory: (transportConfig: TransportConfig) => {
        const userServiceOptions: ClientOptions = transportConfig.get('transportOption');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [TransportConfig]
    },
    TransportConfig,
    {
      provide: 'EXERCISE_SERVICE',
      useFactory: (transportConfig: TransportConfig) => {
        const userServiceOptions: ClientOptions = transportConfig.get('transportOption');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [TransportConfig]
    },
    TransportConfig,
    {
      provide: 'IMAGE_SERVICE',
      useFactory: (transportConfig: TransportConfig) => {
        const userServiceOptions: ClientOptions = transportConfig.get('transportOption');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [TransportConfig]
    }
  ]
})
export class AppModule {}
