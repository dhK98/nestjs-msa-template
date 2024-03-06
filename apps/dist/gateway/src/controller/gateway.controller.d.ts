import { ClientProxy } from '@nestjs/microservices';
export declare class GatewayController {
    private readonly userService;
    constructor(userService: ClientProxy);
    checkHealth(): string;
}
