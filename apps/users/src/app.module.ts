import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validationSchema } from './services/config/user.validation.schema';
import { UserController } from './controller/user.controller';
import userConfig from './services/config/user.config';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { User } from '../../common/entities/user.entity';
import { UserBody } from '../../common/entities/user-body.entity';
import { Body } from '../../common/entities/body.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        path.resolve(__dirname, '..', '..', '..', 'config', `.${process.env.NODE_ENV}.env`),
        path.resolve(__dirname, '..', '..', 'config', `.${process.env.NODE_ENV}.env`)
      ],
      load: [userConfig],
      isGlobal: true,
      validationSchema
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const type = configService.get('user.database.type');
        const host = configService.get('user.database.host');
        const port = configService.get('user.database.port');
        const username = configService.get('user.database.username');
        const password = configService.get('user.database.password');
        const database = configService.get('user.database.database');
        return {
          type,
          host,
          port,
          username,
          password,
          database,
          entities: [User, UserBody, Body],
          synchronize: true
        };
      },
      inject: [ConfigService]
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class AppModule {}
