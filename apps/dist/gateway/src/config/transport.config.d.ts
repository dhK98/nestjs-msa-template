import { ConfigService } from '@nestjs/config';
export declare class TransportConfig {
    private readonly configService;
    private readonly env;
    constructor(configService: ConfigService);
    get(key: string): any;
}
