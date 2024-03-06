import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

@Injectable()
export class TransportConfig {
  private readonly env: { [key: string]: any } = null;

  constructor(private readonly configService: ConfigService) {
    this.env = {};
    this.env.transportOption = {
      transport: Transport.REDIS,
      options: {
        host: this.configService.get('gateway.redis.host'),
        port: this.configService.get('gateway.redis.port'),
        password: this.configService.get('gateway.redis.password')
      }
    };
  }

  get(key: string): any {
    return this.env[key];
  }
}
