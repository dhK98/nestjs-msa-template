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
const gateway_config_1 = require("./config/gateway.config");
const gateway_validation_schema_1 = require("./config/gateway.validation.schema");
const microservices_1 = require("@nestjs/microservices");
const transport_config_1 = require("./config/transport.config");
const users_controller_1 = require("./controller/users.controller");
const exercise_controller_1 = require("./controller/exercise.controller");
const image_controller_1 = require("./controller/image.controller");
const point_controller_1 = require("./controller/point.controller");
const routine_1 = require("./controller/routine");
const path = require("path");
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
                load: [gateway_config_1.default],
                isGlobal: true,
                validationSchema: gateway_validation_schema_1.validationSchema
            })
        ],
        controllers: [
            users_controller_1.UsersController,
            exercise_controller_1.ExerciseController,
            image_controller_1.ImageController,
            point_controller_1.PointController,
            routine_1.RoutineController
        ],
        providers: [
            transport_config_1.TransportConfig,
            {
                provide: 'USER_SERVICE',
                useFactory: (transportConfig) => {
                    const userServiceOptions = transportConfig.get('transportOption');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [transport_config_1.TransportConfig]
            },
            transport_config_1.TransportConfig,
            {
                provide: 'ROUTINE_SERVICE',
                useFactory: (transportConfig) => {
                    const userServiceOptions = transportConfig.get('transportOption');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [transport_config_1.TransportConfig]
            },
            transport_config_1.TransportConfig,
            {
                provide: 'POINT_SERVICE',
                useFactory: (transportConfig) => {
                    const userServiceOptions = transportConfig.get('transportOption');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [transport_config_1.TransportConfig]
            },
            transport_config_1.TransportConfig,
            {
                provide: 'EXERCISE_SERVICE',
                useFactory: (transportConfig) => {
                    const userServiceOptions = transportConfig.get('transportOption');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [transport_config_1.TransportConfig]
            },
            transport_config_1.TransportConfig,
            {
                provide: 'IMAGE_SERVICE',
                useFactory: (transportConfig) => {
                    const userServiceOptions = transportConfig.get('transportOption');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [transport_config_1.TransportConfig]
            }
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map