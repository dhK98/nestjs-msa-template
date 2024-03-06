"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_validation_schema_1 = require("./services/config/user.validation.schema");
const user_controller_1 = require("./controller/user.controller");
const user_config_1 = require("./services/config/user.config");
const user_service_1 = require("./services/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const path = require("path");
const user_entity_1 = require("../../common/entities/user.entity");
const user_body_entity_1 = require("../../common/entities/user-body.entity");
const body_entity_1 = require("../../common/entities/body.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: [
                    path.resolve(__dirname, '..', '..', '..', 'config', `.${process.env.NODE_ENV}.env`),
                    path.resolve(__dirname, '..', '..', 'config', `.${process.env.NODE_ENV}.env`)
                ],
                load: [user_config_1.default],
                isGlobal: true,
                validationSchema: user_validation_schema_1.validationSchema
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => {
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
                        entities: [user_entity_1.User, user_body_entity_1.UserBody, body_entity_1.Body],
                        synchronize: true
                    };
                },
                inject: [config_1.ConfigService]
            })
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map