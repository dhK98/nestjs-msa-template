import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class GatewayController {
  constructor(@Inject('USER_SERVICE') private readonly userService: ClientProxy) {}

  // gateway - management endpoint
  @Get()
  checkHealth() {
    return 'health check';
  }
}
