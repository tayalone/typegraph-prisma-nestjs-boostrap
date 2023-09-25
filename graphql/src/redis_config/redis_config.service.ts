import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Import ConfigService
import {
  RedisOptionsFactory,
  RedisModuleOptions,
} from '@liaoliaots/nestjs-redis';

@Injectable()
export class RedisConfigService implements RedisOptionsFactory {
  constructor(private configService: ConfigService) {}
  async createRedisOptions(): Promise<RedisModuleOptions> {
    const redis = this.configService.get('redis');
    return {
      readyLog: true,
      config: {
        host: redis.host,
        port: redis.port,
        password: redis.password,
        onClientCreated(client) {
          client.on('error', (err) => {
            console.info(`Redis error: ${err.message}`);
          });
          client.on('ready', () => {});
        },
      },
    };
  }
}
